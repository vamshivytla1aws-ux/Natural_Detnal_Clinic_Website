"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SERVICES } from "@/lib/services-data";
import { ChevronRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
};

export default function ServicesPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const previewServices = SERVICES.slice(0, 6);

  // Helper to determine bento grid spans
  const getBentoClasses = (idx: number) => {
    switch (idx) {
      case 0:
        return "md:col-span-2 md:row-span-2 bg-forest-600 dark:bg-forest-800 text-white"; // Large feature card
      case 1:
        return "md:col-span-1 md:row-span-1 bg-white dark:bg-charcoal-900";
      case 2:
        return "md:col-span-1 md:row-span-1 bg-champagne-50 dark:bg-champagne-900/20";
      case 3:
        return "md:col-span-1 md:row-span-1 bg-white dark:bg-charcoal-900";
      case 4:
        return "md:col-span-2 md:row-span-1 bg-sage-50 dark:bg-sage-900/20";
      case 5:
        return "md:col-span-1 md:row-span-1 bg-white dark:bg-charcoal-900";
      default:
        return "bg-white dark:bg-charcoal-900";
    }
  };

  return (
    <section className="section-padding bg-ivory-100 dark:bg-charcoal-950 overflow-hidden">
      <div className="container-premium">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-label justify-center">Our Treatments</span>
          <h2 className="heading-xl text-forest-600 dark:text-ivory-100 mb-6">Comprehensive Dental Care</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            From routine checkups to advanced procedures, we offer a full spectrum of dental services designed to keep your smile healthy and beautiful.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6 mb-12"
        >
          {previewServices.map((service, idx) => {
            const isDarkCard = idx === 0;
            return (
              <motion.div 
                variants={cardVariants}
                key={service.slug} 
                className={`group relative rounded-3xl p-8 overflow-hidden shadow-card hover:shadow-card-hover border border-ivory-300 dark:border-white/10 transition-all duration-500 flex flex-col justify-between ${getBentoClasses(idx)}`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]"></div>
                
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${isDarkCard ? 'bg-white/10' : 'bg-sage-500/10 dark:bg-sage-500/20'}`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-2xl font-serif mb-3 ${isDarkCard ? 'text-white' : 'text-forest-600 dark:text-ivory-100'}`}>
                    {service.title}
                  </h3>
                  <p className={`line-clamp-2 ${isDarkCard ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                    {service.description}
                  </p>
                </div>
                
                <div className="pt-4 mt-auto">
                  <Link 
                    href={`/services/${service.slug}`}
                    className={`inline-flex items-center font-medium transition-colors ${isDarkCard ? 'text-champagne-400 hover:text-white' : 'text-sage-500 hover:text-forest-600 dark:hover:text-ivory-100'}`}
                  >
                    Learn More <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/services" className="btn-secondary inline-block dark:border-ivory-200 dark:text-ivory-200 dark:hover:bg-ivory-200 dark:hover:text-forest-900">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
