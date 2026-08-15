import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getAllPosts } from '@/lib/blog-utils';
import { CLINIC } from '@/lib/config';
import { ClinicActions } from '@/components/ui/ClinicActions';
import { getServiceBySlug } from '@/lib/services-data';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const post = getPostBySlug(params.slug);
    
    if (!post || post.status !== 'published') {
      return {};
    }

    const previousImages = (await parent).openGraph?.images || [];

    const rawTitle = post.seoTitle || post.title;
    const cleanTitle = rawTitle.replace(/\s*\|\s*Natural Dental Clinic\s*$/i, "");

    return {
      title: cleanTitle,
      description: post.description,
      alternates: {
        canonical: `/blog/${post.slug}`,
      },
      openGraph: {
        title: rawTitle,
        description: post.description,
        url: `${CLINIC.seo.siteUrl}/blog/${post.slug}`,
        type: 'article',
        publishedTime: post.publishedAt,
        modifiedTime: post.updatedAt || post.publishedAt,
        authors: [post.author],
        images: [
          {
            url: post.image,
            width: 1200,
            height: 630,
            alt: post.imageAlt,
          },
          ...previousImages,
        ],
      },
    };
  } catch {
    return {};
  }
}

export default function BlogPostPage({ params }: Props) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  if (post.status !== 'published') {
    notFound();
  }

  // Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": `${CLINIC.seo.siteUrl}${post.image}`,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": CLINIC.seo.siteUrl
    },
    "publisher": {
      "@type": "MedicalClinic",
      "name": CLINIC.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${CLINIC.seo.siteUrl}/images/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${CLINIC.seo.siteUrl}/blog/${post.slug}`
    }
  };

  // Find related articles manually via frontmatter, or fallback to latest
  const allPosts = getAllPosts();
  const relatedArticles = post.relatedArticles 
    ? allPosts.filter(p => post.relatedArticles?.includes(p.slug) && p.slug !== post.slug).slice(0, 3)
    : allPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  // Parse markdown headings for basic TOC (H2s only for simplicity)
  const headings = post.content.match(/^##\s+(.*)/gm) || [];
  const toc = headings.map(h => {
    const text = h.replace(/^##\s+/, '');
    const id = text.toLowerCase().replace(/[^\w]+/g, '-');
    return { text, id };
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="bg-ivory-100 min-h-screen pt-32 pb-24">
        <div className="container-premium">
          
          {/* Header */}
          <header className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6 text-sm font-sans font-medium">
              <Link href="/blog" className="text-sage-600 hover:text-forest-600 transition-colors">
                Dental Guides
              </Link>
              <span className="text-ivory-300">/</span>
              <span className="text-charcoal-400">{post.category}</span>
            </div>
            
            <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] text-forest-600 leading-[1.1] mb-6">
              {post.title}
            </h1>
            
            <p className="font-sans text-[1.125rem] text-charcoal-500 max-w-2xl mx-auto leading-relaxed mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm font-sans text-charcoal-400">
              <span>By {post.author}</span>
              <span className="w-1 h-1 rounded-full bg-ivory-300"></span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              {post.reviewedBy && (
                <>
                  <span className="w-1 h-1 rounded-full bg-ivory-300"></span>
                  <span>Reviewed by {post.reviewedBy}</span>
                </>
              )}
            </div>
          </header>

          {/* Featured Image */}
          <div className="max-w-5xl mx-auto mb-16 relative aspect-[16/9] md:aspect-[21/9] rounded-[24px] overflow-hidden shadow-lg border-4 border-white">
            <Image 
              src={post.image || '/images/blog/blog-clinic.jpg'} 
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Table of Contents - Sticky Sidebar on Desktop */}
            <aside className="lg:col-span-4 hidden lg:block sticky top-32">
              <div className="bg-white rounded-[20px] p-8 shadow-sm border border-ivory-300">
                <h3 className="font-serif text-lg text-forest-600 mb-4">In This Guide</h3>
                <nav className="space-y-3">
                  {toc.map((item, i) => (
                    <a 
                      key={i} 
                      href={`#${item.id}`}
                      className="block text-sm font-sans text-charcoal-500 hover:text-forest-600 transition-colors leading-relaxed"
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-8 bg-white rounded-[24px] p-8 md:p-12 shadow-sm border border-ivory-300">
              
              <div className="prose prose-lg prose-headings:font-serif prose-headings:text-forest-600 prose-h2:text-[2rem] prose-h2:mt-12 prose-h2:mb-6 prose-p:font-sans prose-p:text-charcoal-600 prose-p:leading-relaxed prose-a:text-sage-600 prose-a:no-underline hover:prose-a:text-forest-600 prose-li:text-charcoal-600 max-w-none">
                <ReactMarkdown
                  components={{
                    h2: (props) => {
                      // Generate ID for TOC
                      const id = props.children?.toString().toLowerCase().replace(/[^\w]+/g, '-') || '';
                      return <h2 id={id}>{props.children}</h2>
                    }
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Related Services Links (Internal linking) */}
              {post.relatedServices && post.relatedServices.length > 0 && (
                <div className="mt-12 p-6 bg-sage-50 rounded-xl border border-sage-100">
                  <h3 className="font-serif text-lg text-forest-600 mb-3">Related Treatments</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.relatedServices.map(slug => {
                      const service = getServiceBySlug(slug);
                      if (!service) return null;
                      return (
                        <Link 
                          key={slug} 
                          href={`/services/${slug}`}
                          className="bg-white text-forest-600 border border-sage-200 hover:border-forest-600 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                        >
                          {service.shortTitle} →
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Local FAQ block specific to blog */}
              <div className="mt-12 border-t border-ivory-300 pt-8">
                <h3 className="font-serif text-xl text-forest-600 mb-4">Dental Care in Ramachandrapuram</h3>
                <div className="space-y-4 font-sans text-sm text-charcoal-600">
                  <p><strong>Where is Natural Dental Clinic located?</strong><br/>
                  Natural Dental Clinic is located in Ramachandrapuram (RC Puram), Hyderabad, in Sai Nagar Colony behind South India Shopping Mall.</p>
                  
                  <p><strong>Can I contact the clinic after reading a dental guide?</strong><br/>
                  Yes. Use the Call, WhatsApp or Get Directions options below to reach the clinic directly.</p>
                </div>
              </div>

              {/* Medical Disclaimer */}
              <div className="mt-12 border-t border-ivory-300 pt-8 text-center">
                <p className="text-xs font-sans text-charcoal-400 max-w-xl mx-auto">
                  Disclaimer: This article is intended for general educational information and does not replace a dental examination, diagnosis or individualized treatment advice.
                </p>
              </div>

            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-sage-50 section-padding border-t border-sage-200">
        <div className="container-premium max-w-4xl text-center">
          <h2 className="heading-xl text-forest-600 mb-4">Need a dental evaluation?</h2>
          <p className="font-sans text-charcoal-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            If you are looking for a dental clinic in Ramachandrapuram or nearby RC Puram areas, contact Natural Dental Clinic to schedule a consultation.
          </p>
          <ClinicActions 
            variant="grid" 
            treatmentName={`your guide about ${post.title}`}
            showBook={true}
            showCall={true}
            showWhatsApp={true}
            showDirections={true}
          />
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="bg-ivory-100 section-padding border-t border-ivory-300">
          <div className="container-premium">
            <h2 className="heading-lg text-forest-600 mb-10 text-center">More Dental Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedArticles.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group block bg-white rounded-[20px] overflow-hidden shadow-sm border border-ivory-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={relatedPost.image || '/images/blog/blog-clinic.jpg'} 
                      alt={relatedPost.imageAlt || relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-sage-600 uppercase tracking-wider mb-2 block">{relatedPost.category}</span>
                    <h3 className="font-serif text-lg text-forest-600 leading-snug mb-3 group-hover:text-forest-500">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center text-sage-600 font-sans font-medium text-xs group-hover:text-forest-600 transition-colors">
                      Read Guide →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
