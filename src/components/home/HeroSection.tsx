"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CLINIC } from "@/lib/config";
import { PhoneCall, MapPin, ChevronRight, Shield, Zap, Heart, Star } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] bg-forest-600 dark:bg-forest-900 overflow-hidden flex flex-col justify-center section-padding">
      {/* Background gradients and shapes */}
      <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-600 via-forest-600 to-forest-700 dark:from-forest-900 dark:via-forest-900 dark:to-black"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sage-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-mint-400/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      </motion.div>

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{ opacity: opacityText }}
            className="flex flex-col items-start"
          >
            <motion.span variants={itemVariants} className="inline-block py-1 px-3 rounded-full bg-sage-500/20 text-champagne-400 text-sm font-semibold tracking-wider mb-6 border border-champagne-400/20">
              NATURAL DENTAL CLINIC
            </motion.span>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
              Your Smile Deserves <br />
              <span className="text-champagne-400">Expert Care</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/80 font-sans mb-8 max-w-xl leading-relaxed">
              Experience gentle, natural-first dentistry with Dr. Vandana Vytla. Combining advanced technology with a compassionate approach for your entire family.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact" className="btn-primary flex items-center gap-2">
                Book Appointment
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a href={CLINIC.contact.phoneHref} className="btn-white flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                Call Now
              </a>
              <a href={CLINIC.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full font-medium transition-all duration-300 text-white hover:bg-white/10 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-sage-500/20 flex items-center justify-center text-champagne-400">
                  <Star className="w-5 h-5" />
                </div>
                <span className="text-sm text-white/90 font-medium">Patient-Focused<br/>Care</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-sage-500/20 flex items-center justify-center text-champagne-400">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-sm text-white/90 font-medium">Personalised<br/>Dental Care</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-sage-500/20 flex items-center justify-center text-champagne-400">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-sm text-white/90 font-medium">Modern Dental<br/>Solutions</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-sage-500/20 flex items-center justify-center text-champagne-400">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-sm text-white/90 font-medium">Hygiene-Focused<br/>Environment</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ y: yImage }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border border-white/10 z-10 group">
              <Image 
                src="/images/doctor/doctor-main.jpg" 
                alt="Dr. Vandana Vytla" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-600/90 via-forest-600/20 to-transparent dark:from-black/90"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-serif text-2xl mb-1">Dr. Vandana Vytla</p>
                <p className="text-champagne-400 text-sm font-medium">Lead Dental Surgeon</p>
              </div>
            </div>
            {/* Decorative element behind image */}
            <div className="absolute -inset-4 border border-champagne-400/30 rounded-[2.5rem] z-0 translate-x-4 translate-y-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
