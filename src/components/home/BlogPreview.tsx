import Link from "next/link";
import Image from "next/image";
import { getFeaturedPosts, getAllPosts } from "@/lib/blog-utils";

export default function BlogPreview() {
  const posts = getAllPosts();
  let displayPosts = getFeaturedPosts().slice(0, 3);
  
  // Fallback to latest posts if not enough featured posts
  if (displayPosts.length < 3) {
    const additionalPosts = posts
      .filter(p => !displayPosts.find(dp => dp.slug === p.slug))
      .slice(0, 3 - displayPosts.length);
    displayPosts = [...displayPosts, ...additionalPosts];
  }

  if (displayPosts.length === 0) return null;

  return (
    <section className="bg-ivory-100 section-padding border-t border-ivory-300">
      <div className="container-premium">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">Patient Education</span>
            <h2 className="heading-lg text-forest-600 mb-4">Dental Care Guides</h2>
            <p className="font-sans text-charcoal-500 text-lg leading-relaxed">
              Helpful resources and guidance from Natural Dental Clinic in Ramachandrapuram.
            </p>
          </div>
          <Link href="/blog" className="btn-secondary hidden md:inline-flex whitespace-nowrap">
            View All Dental Guides
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 md:mb-0">
          {displayPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white rounded-[20px] overflow-hidden shadow-card border border-ivory-300 transition-all duration-500 ease-premium hover:shadow-card-hover hover:-translate-y-1 flex flex-col h-full">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={post.image || '/images/blog/blog-clinic.jpg'} 
                  alt={post.imageAlt || post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.035]"
                />
                <div className="absolute top-4 left-4 bg-forest-600/10 backdrop-blur-sm px-3 py-1 rounded-full text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-forest-600 border border-forest-600/10">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-[1.25rem] leading-snug text-forest-600 mb-3 group-hover:text-forest-500 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-sans text-charcoal-500 mb-6 text-sm leading-relaxed line-clamp-2 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sage-600 font-sans font-semibold text-sm mt-auto group-hover:text-forest-600 transition-colors duration-300">
                  Read Guide 
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="md:hidden mt-8">
          <Link href="/blog" className="btn-secondary w-full">
            View All Dental Guides
          </Link>
        </div>
      </div>
    </section>
  );
}
