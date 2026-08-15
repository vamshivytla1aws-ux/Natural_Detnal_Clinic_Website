import Image from "next/image";
import Link from "next/link";
import { CLINIC } from "@/lib/config";
import { ArrowRight } from "lucide-react";

export default function DoctorHighlight() {
  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-lg mx-auto rounded-image overflow-hidden shadow-md">
              <Image 
                src="/images/doctor/doctor-main.jpg" 
                alt={`${CLINIC.doctor.name}, ${CLINIC.doctor.title}`} 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-start max-w-xl mx-auto lg:mx-0">
            <span className="eyebrow mb-6">Meet Your Dentist</span>
            
            <h2 className="heading-lg text-forest-600 mb-2">
              {CLINIC.doctor.name}
            </h2>
            <div className="flex flex-col mb-8">
              <span className="font-sans text-lg text-forest-600 font-semibold">{CLINIC.doctor.title}</span>
              <span className="font-sans text-[0.8125rem] text-sage-500 font-bold tracking-wider uppercase mt-1">Reg No: {CLINIC.doctor.regNo}</span>
            </div>
            
            <div className="space-y-4 font-sans text-charcoal-500 leading-relaxed mb-10 text-[1.0625rem]">
              <p>
                Thoughtful dental care centered around comfort, clear communication, and individual treatment needs.
              </p>
              <p>
                {CLINIC.doctor.name} believes in taking the time to listen to every patient, ensuring that clinical recommendations are fully understood and tailored to support long-term oral health.
              </p>
            </div>
            
            <Link href="/doctor" className="inline-flex items-center text-forest-600 font-semibold hover:text-sage-600 transition-colors group">
              Meet Dr. {CLINIC.doctor.name.replace("Dr. ", "").split(" ")[0]}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
        </div>

      </div>
    </section>
  );
}
