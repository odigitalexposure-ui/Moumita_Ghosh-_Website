import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileCheck2,
  Globe2,
  Users2,
  Receipt,
  Building2,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: FileCheck2,
    title: "Audits & Assurance",
    description:
      "Comprehensive Statutory Audits, Internal Audits, Company Audits, LLP Audits, NGO & Trust Audits, Institutional Audits, and FCRA Audits ensuring complete financial accountability.",
    tag: "Comprehensive Assurance",
  },
  {
    number: "02",
    icon: Globe2,
    title: "International Accounting & Taxation",
    description:
      "Cross-border accounting support, US Tax preparation (Form 1120, Form 1040), global bookkeeping, and expert QuickBooks & Odoo accounting software setup.",
    tag: "Global Support",
  },
  {
    number: "03",
    icon: Users2,
    title: "PF, ESI & Professional Tax Consultancy",
    description:
      "End-to-end employer statutory compliance covering EPF registration and monthly ECR filings, ESIC management, and State Professional Tax (P.Tax) filings.",
    tag: "Statutory Compliance",
  },
  {
    number: "04",
    icon: Receipt,
    title: "GST & Direct Taxation",
    description:
      "Strategic tax advisory, timely GST return filing, input tax credit reconciliation, advance tax computation, and income tax representation.",
    tag: "Tax Advisory",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "NGO & Trust Compliance",
    description:
      "Specialized governance for non-profit entities, 12A & 80G registrations, FCRA-related audit and compliance support, and CSR grant utilization auditing.",
    tag: "Non-Profit Advisory",
  },
  {
    number: "06",
    icon: Building2,
    title: "Company Law & Corporate Advisory",
    description:
      "Corporate structuring, ROC secretarial filings, statutory registers, and strategic financial advisory for sustainable organizational expansion.",
    tag: "Corporate Governance",
  },
];

const CoreServices = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF7EF] via-[#F3FAF5] to-[#EAF7EF] py-24">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-200/30 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-amber-200/25 blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-2 lg:items-end"
        >
          <div>
            <span className="inline-flex rounded-full bg-sky-100 border border-sky-200 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#12345B]">
              Core Practice Areas
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-[#12345B] md:text-5xl">
              Professional Solutions
              <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                Tailored For Your Growth
              </span>
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="text-base leading-relaxed text-slate-600">
              We deliver multidisciplinary accounting, auditing, taxation, and
              compliance solutions designed to help domestic enterprises, startups,
              NGOs, and global businesses navigate complex statutory requirements
              with clarity and integrity.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl"
              >
                {/* Animated Left Border */}
                <div className="absolute left-0 top-0 h-full w-1.5 origin-top scale-y-0 bg-gradient-to-b from-amber-400 via-yellow-500 to-amber-600 transition-transform duration-500 group-hover:scale-y-100" />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-slate-200 transition duration-300 group-hover:text-amber-300">
                      {service.number}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600">
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[#12345B] shadow-xs transition duration-300 group-hover:bg-amber-400 group-hover:text-slate-950 group-hover:scale-105">
                    <Icon size={26} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-bold leading-tight text-[#12345B]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>

                {/* Learn More */}
                <div className="mt-7 pt-4 border-t border-slate-100">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#0B5D4B] transition duration-300 hover:text-amber-600"
                  >
                    Explore Details
                    <ArrowRight
                      size={14}
                      className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
