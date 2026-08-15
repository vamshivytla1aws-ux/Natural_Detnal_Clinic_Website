export default function WhyChooseUs() {
  const principles = [
    {
      num: "01",
      title: "Patient-Focused Care",
      desc: "Every treatment begins by understanding your needs, ensuring you always feel heard and comfortable."
    },
    {
      num: "02",
      title: "Clear Treatment Guidance",
      desc: "We explain every procedure and option transparently so you can make informed decisions about your oral health."
    },
    {
      num: "03",
      title: "Hygiene-Focused Environment",
      desc: "Strict sterilization protocols and a spotless clinic ensure your absolute safety and peace of mind."
    },
    {
      num: "04",
      title: "Personalized Dental Care",
      desc: "No two smiles are alike. We design bespoke treatment plans tailored specifically to your clinical needs."
    }
  ];

  return (
    <section className="section-padding bg-ivory-200/60 border-t border-ivory-300">
      <div className="container-premium">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-5">
            <span className="eyebrow mb-4">Why Choose Us</span>
            <h2 className="heading-lg text-forest-600 mb-6">
              A higher standard of <br className="hidden lg:block"/>
              clinical care.
            </h2>
            <p className="text-charcoal-500 font-sans text-lg mb-8 max-w-md leading-relaxed">
              At Natural Dental Clinic, we combine medical excellence with a warm, reassuring environment.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
              {principles.map((p) => (
                <div key={p.num} className="group pl-4 border-l-2 border-champagne-200 hover:border-champagne-400 transition-colors duration-400 ease-premium">
                  <div className="font-serif text-[3rem] leading-none text-champagne-300 group-hover:text-champagne-500 transition-colors duration-400 ease-premium mb-3">
                    {p.num}
                  </div>
                  <h3 className="font-sans font-bold text-charcoal-700 text-[1.0625rem] mb-2">
                    {p.title}
                  </h3>
                  <p className="font-sans text-charcoal-500 text-[0.9375rem] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}

