import { motion } from "framer-motion";
import {
  Users2,
  ShieldCheck,
  Receipt,
  Calculator,
} from "lucide-react";

import { Link } from "react-router-dom";

const compliancePillars = [
  {
    icon: Users2,
    title: "PF Consultancy",
    subtitle: "Provident Fund Compliance",
    description:
      "Comprehensive Employees' Provident Fund (EPF) support including employer registration, monthly return filing, Electronic Challan cum Return (ECR) generation, and compliance health audits.",
    services: [
      "EPF establishment registration",
      "Monthly ECR preparation & filing",
      "Member transfer & settlement assistance",
      "Employer compliance assistance",
    ],
  },
  {
    icon: ShieldCheck,
    title: "ESI Consultancy",
    subtitle: "Employee State Insurance",
    description:
      "Complete Employee State Insurance (ESIC) statutory compliance management ensuring timely employee coverage, monthly contribution computation, and return submissions.",
    services: [
      "ESIC employer registration & code",
      "Monthly contribution calculation & challans",
      "Periodic return filing & register maintenance",
      "ESI inspection & query resolution",
    ],
  },
  {
    icon: Receipt,
    title: "Professional Tax (P.Tax) Consultancy",
    subtitle: "State Statutory Compliance",
    description:
      "Advisory and operational compliance for State Professional Tax, securing Enrollment Certificates (EC) and Registration Certificates (RC), accompanied by scheduled returns.",
    services: [
      "P.Tax Registration (RC) & Enrollment (EC)",
      "Monthly & annual return filings",
      "Slab-wise deduction computation",
      "State-specific compliance advisory",
    ],
  },
  {
    icon: Calculator,
    title: "Payroll Statutory Compliance",
    subtitle: "End-to-End Payroll Verification",
    description:
      "Integrated payroll-related statutory compliance verification, aligning PF, ESI, TDS on salaries, and Professional Tax deductions with statutory labor statutes.",
    services: [
      "Statutory deduction audit",
      "Payroll register & challan reconciliation",
      "Annual statutory audit support",
      "Labor compliance health check",
    ],
  },
];

const StatutoryPayroll = () => {
  return (
    <section
      id="pf-esi-ptax"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-slate-50 to-teal-50/40 py-24"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-10 left-1/3 h-80 w-80 rounded-full bg-emerald-200/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-amber-200/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#0B5D4B] shadow-sm backdrop-blur-md">
            Statutory & Payroll Compliance
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#12345B] md:text-5xl">
            PF, ESI & Professional Tax
            <span className="block bg-gradient-to-r from-[#0B5D4B] via-emerald-600 to-teal-700 bg-clip-text text-transparent">
              Consultancy Services
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Streamlining employer statutory obligations with proactive compliance.
            From initial establishment registrations to monthly electronic filings
            and employee benefit coordination, we ensure seamless regulatory peace
            of mind.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {compliancePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-emerald-100/90 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400 hover:shadow-xl"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#0B5D4B] shadow-sm transition-colors duration-300 group-hover:bg-[#0B5D4B] group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <span className="mt-5 block text-xs font-bold uppercase tracking-wider text-amber-600">
                    {pillar.subtitle}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-[#12345B]">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                    {pillar.services.map((srv, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs font-semibold text-slate-700"
                      >
                        <span className="mr-2.5 h-1.5 w-1.5 rounded-full bg-[#0B5D4B]" />
                        {srv}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#0B5D4B] transition-colors duration-200 hover:text-amber-600"
                  >
                    Inquire for Compliance &rarr;
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Employer Assurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-teal-50/60 p-8 shadow-sm"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h4 className="text-xl font-bold text-[#12345B]">
                Ensuring Complete Employer Statutory Peace of Mind
              </h4>
              <p className="mt-1 text-sm text-slate-600">
                Avoid penalty notices, interest liabilities, and non-compliance
                risks with structured PF, ESI, and P.Tax filings.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#0B5D4B] px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-[#12345B] hover:shadow-lg"
            >
              Get Compliance Assessment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatutoryPayroll;
