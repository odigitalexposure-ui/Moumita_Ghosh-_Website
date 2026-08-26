import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Receipt,
  Building2,
  BriefcaseBusiness,
  ShieldCheck,
  Phone,
  ArrowRight,
} from "lucide-react";
import AuditsSection from "../Audits/AuditsSection";
import InternationalAccounting from "../International/InternationalAccounting";
import StatutoryPayroll from "../Compliance/StatutoryPayroll";

const additionalServices = [
  {
    id: "taxation-gst",
    icon: Receipt,
    title: "GST & Direct Taxation",
    category: "Tax Advisory",
    description:
      "Strategic tax planning, timely GST return filing, input tax credit reconciliation, Advance Tax computations, and representation before authorities.",
    features: [
      "GST registration & monthly returns",
      "Corporate & individual income tax",
      "TDS quarterly compliance & certificates",
    ],
  },
  {
    id: "ngo-trust",
    icon: ShieldCheck,
    title: "NGO & Trust Compliance",
    category: "Non-Profit Governance",
    description:
      "Comprehensive regulatory advisory for charitable institutions, Section 12A / 80G registrations, Form 10B/10BB filings, and donor compliance.",
    features: [
      "Trust & Society incorporation",
      "12A and 80G tax exemptions",
      "CSR project compliance monitoring",
    ],
  },
  {
    id: "corporate-compliance",
    icon: Building2,
    title: "Corporate Law & ROC Filings",
    category: "Corporate Governance",
    description:
      "Secretarial and statutory advisory under the Companies Act, annual ROC filings, corporate structuring, minutes maintenance, and board disclosures.",
    features: [
      "Company & LLP incorporation",
      "Annual ROC return filing (AOC-4, MGT-7)",
      "Statutory registers & secretarial compliance",
    ],
  },
  {
    id: "financial-advisory",
    icon: BriefcaseBusiness,
    title: "Financial & Business Advisory",
    category: "Strategic Growth",
    description:
      "Pragmatic financial consulting, budget forecasting, capital expenditure evaluations, and working capital optimization for emerging businesses.",
    features: [
      "Project report preparation",
      "Financial health & variance analysis",
      "Cash flow & working capital strategy",
    ],
  },
];

const ServicesShowcase = () => {
  return (
    <div className="overflow-hidden">
      {/* Top Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#12345B] pt-32 pb-24 text-white">
        <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-amber-400/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-sky-500/10 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-amber-300 backdrop-blur-md">
              Full-Spectrum Professional Advisory
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
              Professional Services Built for
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Confidence & Compliance
              </span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-300 md:text-lg">
              From statutory audits and global US tax returns (Form 1120/1040)
              to PF, ESI, and Professional Tax compliance, M Ghosh & Co. delivers
              certified, reliable financial solutions tailored to your organization.
            </p>

            {/* Quick Service Anchor Navigation */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#audits-assurance"
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-amber-400 hover:text-slate-950"
              >
                Audits & Assurance
              </a>
              <a
                href="#international-accounting"
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-amber-400 hover:text-slate-950"
              >
                International Accounting & Tax
              </a>
              <a
                href="#pf-esi-ptax"
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-amber-400 hover:text-slate-950"
              >
                PF, ESI & P.Tax Consultancy
              </a>
              <a
                href="#corporate-taxation"
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-amber-400 hover:text-slate-950"
              >
                Taxation & Governance
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1. MAJOR EXPANDED AUDITS & ASSURANCE SECTION */}
      <AuditsSection />

      {/* 2. DEDICATED INTERNATIONAL ACCOUNTING & TAXATION */}
      <InternationalAccounting />

      {/* 3. DEDICATED PF, ESI & PROFESSIONAL TAX (P.TAX) CONSULTANCY */}
      <StatutoryPayroll />

      {/* 4. ADDITIONAL CORE SERVICES: TAXATION, NGO, CORPORATE LAW, ADVISORY */}
      <section
        id="corporate-taxation"
        className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-indigo-50/30 py-24"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#12345B] shadow-xs">
              Comprehensive Coverage
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#12345B] md:text-4xl">
              Taxation, Governance & Non-Profit Services
            </h2>

            <p className="mt-3 text-base text-slate-600">
              Targeted legal and regulatory solutions for enterprises, trusts, and
              charities.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {additionalServices.map((srv, index) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-xl"
                >
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-[#12345B] shadow-xs transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-slate-950">
                      <Icon size={28} />
                    </div>

                    <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-amber-600">
                      {srv.category}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-[#12345B]">
                      {srv.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {srv.description}
                    </p>

                    <ul className="mt-5 space-y-1.5 border-t border-slate-100 pt-4">
                      {srv.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-xs font-semibold text-slate-700"
                        >
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#0B5D4B] transition-colors duration-200 hover:text-amber-600"
                    >
                      Consult Our Specialists &rarr;
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. DUAL PHONE CONSULTATION CTA */}
      <section className="bg-gradient-to-r from-[#12345B] via-slate-900 to-[#0B5D4B] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <span className="rounded-full bg-amber-400/20 px-3.5 py-1 text-xs font-bold text-amber-300">
                Need Fast Statutory Consultation?
              </span>
              <h3 className="mt-3 text-2xl font-black md:text-3xl">
                Speak Directly with Our Chartered Accountant Team
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Call either of our direct lines for immediate assistance with
                audits, international accounting, or statutory compliance.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:8240784998"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-xs font-black uppercase tracking-wider text-slate-950 shadow-md transition hover:bg-amber-500 hover:scale-105"
              >
                <Phone size={14} />
                8240784998
              </a>
              <a
                href="tel:9831996673"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md transition hover:border-amber-400 hover:bg-white/20"
              >
                <Phone size={14} />
                9831996673
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-xl bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-[#12345B] shadow-md transition hover:bg-slate-100"
              >
                Book Online
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesShowcase;
