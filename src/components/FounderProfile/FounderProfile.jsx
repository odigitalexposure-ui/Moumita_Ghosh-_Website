import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  ShieldCheck,
  Globe,
  Building2,
  BadgeCheck,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import mGhoshImage from "../../assets/m_ghosh.jpeg";
import { Link } from "react-router-dom";

const expertise = [
  "Statutory & Internal Audit",
  "GST Advisory & Compliance",
  "Income Tax & Corporate Tax",
  "FCRA Audit & Compliance",
  "Company Law & ROC Filings",
  "Financial Advisory",
  "International Accounting & Taxation",
  "PF, ESI & Professional Tax Consultancy",
];

const achievements = [
  {
    icon: Building2,
    title: "100+ Companies",
    description: "Audited globally across diverse industries with exemplary compliance.",
  },
  {
    icon: ShieldCheck,
    title: "50+ NGOs Served",
    description: "Empowered with specialized audit, FCRA, and statutory governance consultancy.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Cross-border accounting and US tax preparation support for international clients.",
  },
  {
    icon: Award,
    title: "12+ Years Trust",
    description: "Serving corporates, startups, and institutions with steadfast ethical standards.",
  },
];

const stats = [
  {
    number: "12+",
    label: "Years Experience",
    subtext: "Professional Advisory",
  },
  {
    number: "100+",
    label: "Companies Audited Globally",
    subtext: "Domestic & Global",
  },
  {
    number: "50+",
    label: "NGOs Served",
    subtext: "Audit & Compliance",
  },
  {
    number: "100%",
    label: "Ethical Practice",
    subtext: "Regulatory Precision",
  },
];

const FounderProfile = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50/80 via-[#F1EDFF]/50 to-indigo-50/70 pt-28 pb-24 text-slate-800">
      {/* Soft Gradient Lighting Background */}
      <div className="absolute top-10 left-10 h-96 w-96 rounded-full bg-sky-200/40 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 h-[32rem] w-[32rem] rounded-full bg-[#F1EDFF] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-amber-100/60 blur-[130px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#12345B] shadow-sm backdrop-blur-md">
            <Sparkles size={14} className="text-amber-500" />
            Leadership & Profile
          </span>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#12345B] md:text-5xl lg:text-6xl">
            Built on Trust, Knowledge &
            <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Professional Excellence
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            Guiding businesses, institutions, and organizations across the globe
            with over 12 years of specialized audit, taxation, and regulatory experience.
          </p>
        </motion.div>

        {/* Founder Two-Column Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* LEFT: Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="group relative w-full max-w-md">
              {/* Outer Decorative Ring & Shadow */}
              <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-amber-400 via-sky-300 to-indigo-300 opacity-60 blur-lg transition duration-500 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-[32px] border-4 border-white bg-white p-3 shadow-2xl">
                <img
                  src={mGhoshImage}
                  alt="CA Moumita Ghosh - Fellow Chartered Accountant and Company Secretary"
                  className="h-[460px] w-full rounded-[24px] object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                        Proprietor & Founder
                      </p>
                      <h4 className="text-base font-extrabold text-[#12345B]">
                        CA Moumita Ghosh
                      </h4>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-slate-950 font-bold shadow-md">
                      12+
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Qualifications, Introduction & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-white/80 bg-white/90 p-8 shadow-xl backdrop-blur-xl lg:p-10">
              <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
                Proprietor, M Ghosh & Co.
              </span>

              <h2 className="mt-3 text-3xl font-black text-[#12345B] md:text-4xl">
                CA Moumita Ghosh
              </h2>

              {/* Verified Qualification Line */}
              <div className="mt-3 inline-flex flex-wrap items-center gap-2 rounded-xl bg-indigo-50/80 px-4 py-2 text-sm font-semibold text-[#12345B]">
                <BadgeCheck size={18} className="text-amber-500" />
                <span>FCA | Company Secretary | M.Com</span>
              </div>

              <p className="mt-6 text-base leading-relaxed text-slate-700 md:text-lg">
                A distinguished <strong>Fellow Chartered Accountant (FCA)</strong> and qualified <strong>Company Secretary</strong> with over 12 years of rigorous professional experience spanning Statutory & Internal Audits, Domestic & International Taxation, Corporate Governance, and NGO Regulatory Frameworks.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                Known for combining analytical precision with modern cloud accounting technologies, she has audited over 100 companies globally and advised more than 50 NGOs and charitable trusts, delivering compliant, transparent, and scalable financial solutions.
              </p>

              {/* Verified Education & Credentials Card */}
              <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B5D4B] text-white shadow-sm">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#12345B]">
                      Verified Academic & Professional Credentials
                    </h3>
                    <ul className="mt-2 grid gap-1.5 text-xs font-medium text-slate-700 sm:grid-cols-2">
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                        Fellow Chartered Accountant (FCA)
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                        Qualified Company Secretary
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                        M.Com (First Class Honours)
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                        University of Calcutta
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Direct Dual Phone Contacts & CTA */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 pt-6">
                <div className="space-y-1.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Direct Contact Lines:
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-[#12345B]">
                    <a
                      href="tel:8240784998"
                      className="inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 transition"
                    >
                      <Phone size={15} className="text-amber-500" />
                      +91 82407 84998
                    </a>
                    <span className="text-slate-300">|</span>
                    <a
                      href="tel:9831996673"
                      className="inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 transition"
                    >
                      <Phone size={15} className="text-amber-500" />
                      +91 98319 96673
                    </a>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-md transition duration-300 hover:bg-amber-500 hover:scale-105"
                >
                  Book Consultation
                  <ArrowRight size={16} className="ml-1.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Premium Trust Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="rounded-[32px] border border-white/80 bg-white/80 p-8 shadow-xl backdrop-blur-xl md:p-10">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className="relative flex flex-col items-center text-center sm:items-start sm:text-left"
                >
                  {index > 0 && (
                    <div className="absolute -left-4 top-1/4 hidden h-1/2 w-px bg-slate-200 lg:block" />
                  )}
                  <span className="text-4xl font-black tracking-tight text-[#12345B] md:text-5xl">
                    <span className="text-amber-500">{item.number}</span>
                  </span>
                  <h4 className="mt-2 text-base font-bold text-slate-800">
                    {item.label}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500">{item.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Expertise Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#12345B] shadow-sm">
              Core Practice Areas
            </span>
            <h3 className="mt-4 text-3xl font-black text-[#12345B] md:text-4xl">
              Areas of Professional Excellence
            </h3>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-4 rounded-2xl border border-white bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition duration-300 group-hover:bg-amber-400 group-hover:text-slate-950">
                  <BadgeCheck size={22} />
                </div>
                <span className="text-sm font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Professional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#12345B] shadow-sm">
              Proven Track Record
            </span>
            <h3 className="mt-4 text-3xl font-black text-[#12345B] md:text-4xl">
              Trusted by Businesses, NGOs & Global Clients
            </h3>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-white bg-white/90 p-7 text-center shadow-md transition duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[#12345B] transition duration-300 group-hover:bg-amber-400 group-hover:text-slate-950 shadow-sm">
                    <Icon size={26} />
                  </div>
                  <h4 className="mt-5 text-lg font-bold text-[#12345B]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Founder's Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[36px] border border-sky-200/80 bg-gradient-to-br from-white via-sky-50/50 to-indigo-50/60 p-8 shadow-xl md:p-14">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
                A Message From Our Founder
              </span>

              <h3 className="mt-6 text-2xl font-black text-[#12345B] md:text-4xl">
                Building Enduring Value Through
                <span className="block text-amber-600">
                  Integrity & Professional Precision
                </span>
              </h3>

              <p className="mt-6 text-base italic leading-relaxed text-slate-700 md:text-lg">
                "Every client deserves accurate financial clarity, proactive advisory, and practical regulatory solutions. At M Ghosh & Co., our commitment extends beyond statutory compliance—we strive to be a dependable financial pillar that safeguards your governance and propels long-term organizational success."
              </p>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-[#12345B]">
                  CA Moumita Ghosh
                </h4>
                <p className="mt-1 text-sm font-semibold text-amber-700">
                  FCA • Company Secretary • M.Com
                </p>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="rounded-xl bg-amber-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-md transition duration-300 hover:bg-amber-500 hover:scale-105"
                >
                  Schedule Consultation
                </Link>
                <Link
                  to="/services"
                  className="rounded-xl border border-[#12345B]/20 bg-white px-7 py-3.5 text-sm font-bold text-[#12345B] transition duration-300 hover:border-amber-400 hover:bg-amber-50"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderProfile;
