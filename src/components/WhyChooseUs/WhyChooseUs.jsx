import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Clock3,
  Users,
  BriefcaseBusiness,
  Scale,
  Handshake,
  ArrowRight,
  Phone,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "12+ Years Verified Expertise",
    description:
      "Fellow Chartered Accountant (FCA) & Company Secretary led advisory ensuring absolute precision in statutory and financial compliance.",
  },
  {
    icon: Clock3,
    title: "Timely Statutory Filings",
    description:
      "Rigorous calendar management ensuring all statutory audit reports, tax filings, and ROC submissions are executed well ahead of deadlines.",
  },
  {
    icon: Users,
    title: "100+ Audits Globally",
    description:
      "Extensive experience conducting statutory and internal audits for domestic corporations, LLPs, and international entities across diverse sectors.",
  },
  {
    icon: BriefcaseBusiness,
    title: "International Accounting Support",
    description:
      "Hands-on expertise in US Form 1120/1040 preparation, global bookkeeping, and cloud ERP systems including QuickBooks and Odoo.",
  },
  {
    icon: Scale,
    title: "50+ NGOs & Trusts Empowered",
    description:
      "Deep specialization in non-profit statutory audits, Section 12A/80G compliance, and FCRA-related audit and reporting frameworks.",
  },
  {
    icon: Handshake,
    title: "End-to-End Statutory Compliance",
    description:
      "Proactive PF, ESI, and Professional Tax (P.Tax) consultancy protecting employers from statutory penalties and liabilities.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F1EDFF] via-[#FAF8FF] to-[#F1EDFF] py-24">
      {/* Ambient background glows */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-purple-200/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-amber-200/25 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-sky-200 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#12345B] shadow-xs">
            Why Choose M Ghosh & Co.
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#12345B] md:text-5xl">
            Your Trusted Partner For
            <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Audit, Tax & Compliance Excellence
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 leading-relaxed">
            We combine high-level technical capability, strict ethical independence,
            and tech-enabled workflows to safeguard your business and accelerate
            sustainable growth.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[#12345B] shadow-xs transition duration-300 group-hover:bg-amber-400 group-hover:text-slate-950 group-hover:scale-105">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#12345B]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {feature.description}
                </p>

                {/* Accent line on hover */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-950 via-slate-900 to-[#12345B] px-8 py-12 shadow-2xl lg:px-14"
        >
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-amber-400/20 blur-[100px] pointer-events-none" />
          <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-sky-400/10 blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <span className="rounded-full bg-amber-400/20 px-3.5 py-1 text-xs font-bold text-amber-300">
                Direct Professional Access
              </span>

              <h3 className="mt-3 text-2xl font-black text-white md:text-3xl">
                Ready to Discuss Your Financial Architecture?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                Whether you need statutory audit services, international taxation
                guidance, PF/ESI consultancy, or company law advisory, our senior
                consultants are available for personalized consultation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center rounded-xl bg-amber-400 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 transition-all duration-300 hover:bg-amber-500 hover:scale-105 shadow-md"
              >
                Book Consultation
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:8240784998"
                className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/20 hover:border-amber-400"
              >
                <Phone size={14} className="mr-1.5 text-amber-400" />
                8240784998
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
