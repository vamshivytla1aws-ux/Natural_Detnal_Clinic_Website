import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { CLINIC } from "@/lib/config";
import { ClinicActions } from "@/components/ui/ClinicActions";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ivory-100 pt-28 lg:pt-32">
      <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_72%_18%,rgba(152,170,145,.22),transparent_42%)]" />
      <div className="container-premium relative z-10 pb-20 pt-10 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-14 lg:grid-cols-[1.03fr_.97fr] lg:gap-16">
          <div className="animate-fade-up">
            <span className="eyebrow mb-6">Dentistry, considered differently</span>
            <h1 className="heading-display max-w-3xl text-forest-600">
              Thoughtful care for a smile that feels like you.
            </h1>
            <p className="mt-7 max-w-xl text-[1.08rem] leading-8 text-charcoal-500 md:text-xl">
              Personalised dental care in Ramachandrapuram, led by {CLINIC.doctor.name}. Calm consultations, clear guidance, and treatment planned around you.
            </p>

            <ClinicActions
              variant="hero"
              showBook
              showWhatsApp
              showCall={false}
              showDirections={false}
              className="mt-9"
            />

            <div className="mt-10 grid max-w-xl gap-4 border-t border-ivory-300 pt-7 sm:grid-cols-2">
              <a href={CLINIC.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 text-left">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-forest-600 shadow-sm"><MapPin size={17} /></span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[.14em] text-sage-600">Visit us</span>
                  <span className="mt-1 block text-sm font-medium text-charcoal-600 group-hover:text-forest-600">Ramachandrapuram, Hyderabad</span>
                </span>
              </a>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-forest-600 shadow-sm"><Clock3 size={17} /></span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[.14em] text-sage-600">Clinic hours</span>
                  <span className="mt-1 block text-sm font-medium text-charcoal-600">Mon–Sat, two sessions</span>
                </span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in lg:pl-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[34px] border-[6px] border-white bg-sage-100 shadow-[0_30px_80px_rgba(18,55,42,.16)] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/doctor/doctor-vandana.jpg"
                alt={`${CLINIC.doctor.name}, ${CLINIC.doctor.title} at Natural Dental Clinic`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/25 bg-forest-900/80 p-5 text-white backdrop-blur-xl sm:inset-x-7 sm:bottom-7 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[.16em] text-champagne-300">Meet your dentist</p>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-serif text-2xl leading-tight text-white sm:text-[1.75rem]">{CLINIC.doctor.name}</p>
                    <p className="mt-1 text-sm text-sage-100">{CLINIC.doctor.title} · Reg. No. {CLINIC.doctor.regNo}</p>
                  </div>
                  <Link href="/doctor" aria-label={`Meet ${CLINIC.doctor.name}`} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-forest-600 transition-transform hover:-translate-y-0.5">
                    <ArrowUpRight size={19} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute -right-10 -top-10 -z-10 h-44 w-44 rounded-full border border-champagne-300/60" />
            <div className="absolute -bottom-10 -left-10 -z-10 h-52 w-52 rounded-full bg-sage-200/60 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
