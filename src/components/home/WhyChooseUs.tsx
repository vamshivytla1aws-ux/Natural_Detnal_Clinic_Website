"use client";

import { useEffect, useRef, useState } from "react";
import { Heart, Zap, Shield, User, Eye, Users } from "lucide-react";

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Gentle Care",
      description: "We prioritize your comfort, offering pain-free treatments in a relaxing environment."
    },
    {
      icon: Zap,
      title: "Modern Solutions",
      description: "Equipped with state-of-the.art technology for precise diagnostics and effective treatments."
    },
    {
      icon: Shield,
      title: "Sterilized Environment",
      description: "Strict adherence to international hygiene and sterilization protocols for your safety."
    },
    {
      icon: User,
      title: "Personalized Treatment",
      description: "Customized care plans tailored specifically to your unique dental needs and goals."
    },
    {
      icon: Eye,
      title: "Transparent Consultation",
      description: "Clear explanations of your condition, treatment options, and associated costs."
    },
    {
      icon: Users,
      title: "Family-Friendly Care",
      description: "Comprehensive dentistry for all ages, from children's first checkups to senior care."
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-premium">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="section-label justify-center">Why Choose Us</span>
          <h2 className="heading-xl text-forest-600 mb-6">The Natural Choice for Your Smile</h2>
          <p className="text-gray-600 text-lg">
            We are committed to delivering exceptional dental care that prioritizes your health, comfort, and natural beauty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className={`flex gap-4 p-6 rounded-2xl bg-ivory-100 hover:bg-sage-500/5 transition-colors duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-forest-600 flex-shrink-0 flex items-center justify-center text-champagne-400">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-forest-600 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
