import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  ShieldCheck,
  Globe,
  Building2,
  BadgeCheck,
} from "lucide-react";

import { assets } from "../../assets/assets";

import { Link } from "react-router-dom";

const expertise = [
  "Statutory & Internal Audit",
  "GST Consultancy",
  "Income Tax",
  "FCRA Compliance",
  "Company Law",
  "Financial Advisory",
  "Foreign Taxation",
  "International Accounting",
];

const achievements = [
  {
    icon: Building2,
    title: "40+ Companies",
    description: "Successfully audited across India.",
  },
  {
    icon: ShieldCheck,
    title: "10+ NGOs",
    description: "Audit & compliance consultancy.",
  },
  {
    icon: Globe,
    title: "International",
    description: "Independent auditor for funding agencies.",
  },
  {
    icon: Award,
    title: "Trusted Advisor",
    description: "Serving corporates and organizations with integrity.",
  },
];

const stats = [
  {
    number: "10+",
    label: "Years Experience",
  },
  {
    number: "40+",
    label: "Companies Audited",
  },
  {
    number: "10+",
    label: "NGOs Served",
  },
  {
    number: "100%",
    label: "Ethical Practice",
  },
];

const FounderProfile = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24">
      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[34rem] w-[34rem] rounded-full bg-yellow-400/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="inline-flex rounded-full border border-amber-400/30 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-amber-300 backdrop-blur-xl">
            Meet Our Founder
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Leadership Built on
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Trust, Knowledge & Excellence
            </span>
          </h2>
        </motion.div>

        {/* Founder Layout */}

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Glow */}

            <div className="absolute -top-8 left-8 h-72 w-72 rounded-full bg-amber-400/20 blur-[120px]" />

            {/* Image Card */}

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <img
                src={assets.m_ghosh_co}
                alt="CA Moumita Ghosh"
                className="w-full max-w-md rounded-3xl object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-lg font-semibold text-amber-300">
              Proprietor, M Ghosh & Co.
            </span>

            <h3 className="mt-3 text-4xl font-black text-white">
              CA Moumita Ghosh
            </h3>

            <p className="mt-4 text-lg font-medium text-slate-300">
              FCA | Company Secretary | FCRA Specialist | M.Com
            </p>

            <p className="mt-8 leading-8 text-slate-300">
              A distinguished Fellow Chartered Accountant (FCA) and qualified
              Company Secretary with over a decade of professional experience in
              Audit, Taxation, Financial Management, Corporate Governance, GST
              Consultancy and FCRA Compliance.
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              Recognized for a technology-driven approach and unwavering ethical
              standards, she has successfully served corporates, NGOs and
              international organizations by delivering practical, compliant and
              growth-oriented financial solutions.
            </p>

            {/* Education Card */}

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-amber-400/20 p-3">
                  <GraduationCap className="text-amber-400" size={28} />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white">Education</h4>

                  <p className="mt-2 text-slate-300">
                    • Fellow Chartered Accountant (FCA)
                  </p>

                  <p className="text-slate-300">
                    • Qualified Company Secretary
                  </p>

                  <p className="text-slate-300">
                    • M.Com (First Class Honours)
                  </p>

                  <p className="text-slate-300">• University of Calcutta</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===========================
    Core Expertise
=========================== */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="text-center">
            <span className="inline-flex rounded-full border border-amber-400/30 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-amber-300 backdrop-blur-xl">
              Core Expertise
            </span>

            <h3 className="mt-6 text-4xl font-black text-white">
              Areas of Professional
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h3>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/10"
              >
                <div className="rounded-xl bg-amber-400/20 p-3 transition duration-300 group-hover:bg-amber-400">
                  <BadgeCheck
                    size={22}
                    className="text-amber-400 group-hover:text-slate-900"
                  />
                </div>

                <span className="font-medium text-slate-200">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ==========================================
      Professional Achievements
========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="text-center">
            <span className="inline-flex rounded-full border border-amber-400/30 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-amber-300 backdrop-blur-xl">
              Professional Achievements
            </span>

            <h3 className="mt-6 text-4xl font-black text-white md:text-5xl">
              Trusted By Businesses,
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                NGOs & Organizations
              </span>
            </h3>
          </div>

          {/* Achievement Cards */}

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/10"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/20 transition duration-300 group-hover:bg-amber-400">
                    <Icon
                      size={30}
                      className="text-amber-400 group-hover:text-slate-900"
                    />
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 leading-7 text-slate-300">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ==========================================
      Statistics
========================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="text-center"
                >
                  <h2 className="text-5xl font-black text-amber-400">
                    {item.number}
                  </h2>

                  <p className="mt-4 text-lg text-slate-300">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ==========================================
      Founder's Message
========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl lg:p-16">
            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-400/10 blur-[120px]" />

            <div className="relative z-10">
              <div className="mx-auto max-w-4xl text-center">
                <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-amber-300">
                  A Message From Our Founder
                </span>

                <h3 className="mt-8 text-3xl font-black text-white md:text-5xl">
                  Building Trust Through
                  <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Integrity & Professional Excellence
                  </span>
                </h3>

                <p className="mt-10 text-lg leading-9 text-slate-300 italic">
                  "Every client deserves accurate financial guidance,
                  transparent advice and practical solutions. At M Ghosh & Co.,
                  our commitment is not only to ensure statutory compliance but
                  also to become a trusted financial partner who contributes to
                  the long-term growth and success of every business we serve."
                </p>

                <div className="mt-10">
                  <h4 className="text-2xl font-bold text-white">
                    CA Moumita Ghosh
                  </h4>

                  <p className="mt-2 text-amber-300">
                    FCA • Company Secretary • FCRA Specialist
                  </p>
                </div>

                {/* Buttons */}

                <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-8 py-4 font-semibold text-slate-900 transition duration-300 hover:scale-105"
                  >
                    Schedule Consultation
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition duration-300 hover:border-amber-400 hover:bg-white/10"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderProfile;
