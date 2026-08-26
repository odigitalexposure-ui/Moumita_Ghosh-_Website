import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  ShieldCheck,
  BriefcaseBusiness,
  Scale,
  Phone,
} from "lucide-react";
import mGhoshImage from "../../assets/m_ghosh.jpeg";

const highlights = [
  {
    icon: <BadgeCheck size={20} />,
    title: "FCA Qualified",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Company Secretary",
  },
  {
    icon: <Scale size={20} />,
    title: "FCRA & NGO Audits",
  },
  {
    icon: <BriefcaseBusiness size={20} />,
    title: "Global Tax & Advisory",
  },
];

const AboutPreview = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-[#F1EDFF]/60 py-24">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 h-72 w-72 rounded-full bg-sky-200/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-amber-200/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Founder Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
              <div className="relative overflow-hidden rounded-[28px] border-4 border-white bg-white p-2.5 shadow-2xl">
                <img
                  src={mGhoshImage}
                  alt="CA Moumita Ghosh - Fellow Chartered Accountant and Company Secretary"
                  className="rounded-[22px] object-cover object-top w-full h-[400px]"
                  loading="lazy"
                />

                {/* Experience Pill */}
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/90 bg-white/95 p-3.5 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                        Firm Leadership
                      </p>
                      <p className="text-sm font-extrabold text-[#12345B]">
                        CA Moumita Ghosh
                      </p>
                    </div>
                    <span className="rounded-lg bg-amber-400 px-2.5 py-1 text-xs font-black text-slate-950 shadow-xs">
                      12+ Yrs Exp.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#12345B] shadow-xs">
              About M Ghosh & Co.
            </span>

            <h2 className="mt-5 text-3xl md:text-5xl font-black text-[#12345B] leading-tight">
              Trusted Financial &
              <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                Statutory Compliance Experts
              </span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-600">
              M Ghosh & Co. is a professionally managed Chartered Accountancy firm committed to delivering comprehensive Auditing, Taxation, International Accounting (US Form 1120, Form 1040, QuickBooks, Odoo), PF, ESI & Professional Tax Consultancy, and Corporate Advisory services with uncompromising integrity and accuracy.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Led by <strong>CA Moumita Ghosh</strong>, <strong>FCA & Company Secretary</strong>, our practice combines 12+ years of specialized experience, serving over 100 audited companies globally and 50+ NGOs with tailored, growth-oriented financial solutions.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-2xl border border-white bg-white/80 p-3.5 shadow-xs transition hover:border-amber-400 hover:shadow-md"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="mt-9 flex flex-wrap items-center gap-5 border-t border-slate-200/60 pt-6">
              <Link
                to="/about"
                className="inline-flex items-center bg-amber-400 hover:bg-amber-500 text-slate-950 px-6 py-3.5 rounded-xl text-sm font-bold shadow-md transition duration-300 hover:scale-105"
              >
                Learn More About Our Founder
                <ArrowRight size={18} className="ml-2" />
              </Link>

              <div className="flex items-center gap-3 text-xs font-bold text-[#12345B]">
                <Phone size={14} className="text-amber-500" />
                <a href="tel:8240784998" className="hover:text-amber-600 transition">
                  8240784998
                </a>
                <span className="text-slate-300">|</span>
                <a href="tel:9831996673" className="hover:text-amber-600 transition">
                  9831996673
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
