import React from 'react';
import { Link } from 'react-router-dom';
import SectionCard from '../components/SectionCard';

export default function Home() {
  return (
    <>
      <section className="bg-white text-[#1f3b73]">
  <div className="container mx-auto py-16 px-6 text-center">
    <h1 className="text-4xl font-bold mb-4">
      Empowering Leaders. Transforming Organizations. Driving Results.
    </h1>
    <p className="text-lg mb-6">
      Foreleads Leadership Consulting helps technology and government leaders achieve operational excellence and organizational transformation through evidence-based leadership strategies.
    </p>
    <div className="space-x-4">
      <a
        href="/contact"
        className="bg-[#1f3b73] text-white px-6 py-3 rounded hover:bg-[#d4af37]"
      >
        Schedule a Consultation
      </a>
      <a
        href="/services"
        className="border border-[#1f3b73] text-[#1f3b73] px-6 py-3 rounded hover:bg-[#d4af37] hover:text-white"
      >
        Explore Our Services
      </a>
    </div>
  </div>
</section>

      <section className="container py-12">
        <p className="lead max-w-3xl"><span className="font-semibold">Founded by Dr. Anthony Foreman</span>, Foreleads Leadership Consulting brings over two decades of executive IT and organizational leadership experience to every engagement.</p>
      </section>
      <section className="container pb-12">
        <h2 className="h2">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <SectionCard title="IT Leadership Consulting">Advisory, coaching, and frameworks that bridge strategy and execution.</SectionCard>
          <SectionCard title="Government Leadership Development">Programs and coaching tailored for public-sector leaders and teams.</SectionCard>
          <SectionCard title="Organizational Transformation & Change">Readiness, strategy, communications, and execution support.</SectionCard>
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="container py-12">
          <blockquote className="text-xl font-semibold text-slate-900 max-w-3xl">“Dr. Foreman’s approach to leadership transforms how teams think, perform, and lead.”</blockquote>
        </div>
      </section>
      <section className="container py-12">
        <div className="card p-6 flex items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Ready to elevate your leadership impact?</h3>
            <p className="text-slate-600">Let’s talk.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
