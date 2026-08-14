import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  image: string;
  imageAlt: string;
  relatedServices?: string[];
  relatedArticles?: string[];
  author: string;
  reviewedBy?: string;
  status: 'published' | 'draft';
  content: string;
}

export function getPostSlugs() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }
  return fs.readdirSync(blogDirectory);
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(blogDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    seoTitle: data.seoTitle,
    description: data.description,
    excerpt: data.excerpt,
    category: data.category,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    featured: data.featured,
    image: data.image,
    imageAlt: data.imageAlt,
    relatedServices: data.relatedServices || [],
    relatedArticles: data.relatedArticles || [],
    author: data.author,
    reviewedBy: data.reviewedBy,
    status: data.status || 'draft',
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => slug.endsWith('.md'))
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post.status === 'published')
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.publishedAt > post2.publishedAt ? -1 : 1));
  return posts;
}

export function getDraftPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => slug.endsWith('.md'))
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post.status === 'draft')
    .sort((post1, post2) => (post1.publishedAt > post2.publishedAt ? -1 : 1));
  return posts;
}

export function getFeaturedPosts(): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter(post => post.featured);
}
