import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getFeaturedPosts } from '@/lib/blog-utils';
import { ClinicActions } from '@/components/ui/ClinicActions';

export const metadata: Metadata = {
  title: "Dental Care Guides — RC Puram, Hyderabad",
  description: "Explore practical dental care guides from Natural Dental Clinic in Ramachandrapuram (RC Puram), Hyderabad covering tooth pain, root canal treatment, implants, braces, children's dentistry, gum care and preventive dental health.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLandingPage() {
  const posts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  
  // If no featured posts are marked, fallback to the first one, or use the specific "how to choose" one.
  const featuredPost = featuredPosts.length > 0 ? featuredPosts[0] : posts[0];
  
  // The rest of the posts for the grid
  const recentPosts = featuredPost ? posts.filter(post => post.slug !== featuredPost.slug) : posts;

  return (
    <div className="bg-ivory-100 min-h-screen pt-32 pb-24">
      <div className="container-premium">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="eyebrow mx-auto justify-center mb-6">Patient Education</span>
          <h1 className="heading-display mb-6">Dental Care Guides</h1>
          <p className="font-sans text-[1.125rem] text-charcoal-500 mb-4 max-w-2xl mx-auto leading-relaxed">
            Helpful dental information, treatment guidance and oral-care resources from Natural Dental Clinic in Ramachandrapuram, Hyderabad.
          </p>
          <p className="font-sans text-[0.9375rem] text-charcoal-400 max-w-xl mx-auto">
            Learn about common dental concerns, treatment options and when it may be appropriate to visit a dentist.
          </p>
        </div>

        {/* Featured Guide */}
        {featuredPost && (
          <div className="mb-20">
            <h2 className="heading-lg text-forest-600 mb-8 border-b border-ivory-300 pb-4">Featured Guide</h2>
            <Link href={`/blog/${featuredPost.slug}`} className="group block bg-white rounded-[24px] overflow-hidden shadow-sm border border-ivory-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <Image 
                    src={featuredPost.image || '/images/blog/blog-clinic.jpg'} 
                    alt={featuredPost.imageAlt || featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-forest-600 shadow-sm">
                    {featuredPost.category}
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="font-serif text-[2rem] md:text-[2.5rem] leading-tight text-forest-600 mb-4 group-hover:text-forest-500 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="font-sans text-charcoal-500 mb-8 text-lg leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sage-600 font-sans font-medium text-sm group-hover:text-forest-600 transition-colors">
                    Read Guide 
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Latest Guides Grid */}
        <div className="mb-20">
          <h2 className="heading-lg text-forest-600 mb-8 border-b border-ivory-300 pb-4">Latest Dental Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white rounded-[20px] overflow-hidden shadow-sm border border-ivory-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={post.image || '/images/blog/blog-clinic.jpg'} 
                    alt={post.imageAlt || post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-forest-600 shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-[1.375rem] leading-snug text-forest-600 mb-3 group-hover:text-forest-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-sans text-charcoal-500 mb-6 text-sm leading-relaxed line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sage-600 font-sans font-medium text-sm mt-auto group-hover:text-forest-600 transition-colors">
                    Read Guide 
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Local Search Section */}
        <div className="bg-sage-50 rounded-[24px] p-8 md:p-12 text-center border border-sage-200 mb-20 max-w-4xl mx-auto">
          <h2 className="font-serif text-[2rem] text-forest-600 mb-4">Dental Care Near Ramachandrapuram</h2>
          <p className="font-sans text-charcoal-600 mb-4 max-w-2xl mx-auto leading-relaxed text-lg">
            Natural Dental Clinic is located in Ramachandrapuram (RC Puram), Hyderabad and provides dental care for patients from the local community and nearby areas.
          </p>
          <p className="font-sans text-charcoal-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Conveniently accessible from BHEL, LIG, Beeramguda, Ameenpur, Patancheru, Ashok Nagar, Lingampally, Chandanagar, Miyapur and surrounding areas.
          </p>
        </div>

        {/* Clinic CTA */}
        <div className="bg-forest-600 rounded-[32px] p-10 md:p-16 text-center shadow-xl relative overflow-hidden max-w-4xl mx-auto">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full mix-blend-screen opacity-10" style={{ background: "radial-gradient(circle, #C5A66A 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
          </div>
          <div className="relative z-10">
            <h2 className="font-serif text-[2.5rem] text-white mb-4 leading-tight">Need a dental consultation?</h2>
            <p className="font-sans text-sage-200 mb-8 max-w-xl mx-auto">
              If you are experiencing dental concerns or need a routine evaluation, contact us to schedule an appointment.
            </p>
            <ClinicActions 
              variant="grid" 
              showBook={true} 
              showCall={true} 
              showWhatsApp={true} 
              showDirections={true}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
