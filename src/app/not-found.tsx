import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[72vh] bg-ivory-100 pt-40 pb-24 flex items-center">
      <div className="container-premium text-center">
        <p className="eyebrow justify-center">404 · Page not found</p>
        <h1 className="heading-display max-w-3xl mx-auto mb-6">Let&apos;s get you back to a healthy smile.</h1>
        <p className="text-lg text-charcoal-500 max-w-xl mx-auto mb-10">
          The page may have moved. Explore our treatments or contact the clinic directly.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Return Home</Link>
          <Link href="/services" className="btn-secondary">View Treatments</Link>
        </div>
      </div>
    </section>
  );
}
