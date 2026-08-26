import { motion } from "framer-motion";
import {
  FileCheck2,
  ShieldAlert,
  Building,
  Scale,
  HeartHandshake,
  Landmark,
  GraduationCap,
  Globe2,
} from "lucide-react";
import { Link } from "react-router-dom";

const auditTypes = [
  {
    id: "statutory-audits",
    icon: FileCheck2,
    title: "Statutory Audits",
    subtitle: "Mandatory Regulatory Compliance",
    description:
      "Rigorous statutory audit services conducted in accordance with applicable auditing standards for Companies, LLPs, NGOs, Trusts, and Institutions.",
    bullets: [
      "Companies & LLPs compliance",
      "NGO & Trust statutory verification",
      "Institutional financial statements",
    ],
  },
  {
    id: "internal-audits",
    icon: ShieldAlert,
    title: "Internal Audits",
    subtitle: "Risk & Control Assessment",
    description:
      "Independent and objective evaluation of internal control review, process review, risk assessment, financial control review, operational review, and compliance review.",
    bullets: [
      "Internal control & risk review",
      "Process & operational review",
      "Compliance review & audit reporting",
    ],
  },
  {
    id: "company-audits",
    icon: Building,
    title: "Company Audits",
    subtitle: "Corporate Financial Integrity",
    description:
      "Comprehensive audits for private and public limited companies ensuring absolute adherence to the Companies Act, accounting standards, and regulatory disclosures.",
    bullets: [
      "Companies Act compliance",
      "True and fair view reporting",
      "ROC & board disclosures",
    ],
  },
  {
    id: "llp-audits",
    icon: Scale,
    title: "LLP Audits",
    subtitle: "Partnership Account Assurance",
    description:
      "Specialized audit and financial statement validation for Limited Liability Partnerships (LLPs) exceeding statutory contribution and turnover thresholds.",
    bullets: [
      "LLP Act compliance review",
      "Partner accounts verification",
      "Statement of Solvency support",
    ],
  },
  {
    id: "ngo-audits",
    icon: HeartHandshake,
    title: "NGO Audits",
    subtitle: "Non-Profit Transparency",
    description:
      "Dedicated audit services for non-governmental organizations, societies, and non-profit entities ensuring transparent utilization of project funds.",
    bullets: [
      "Grant utilization certificates",
      "Donor fund compliance",
      "Statutory annual returns",
    ],
  },
  {
    id: "trust-audits",
    icon: Landmark,
    title: "Trust Audits",
    subtitle: "Fiduciary & Tax Assurance",
    description:
      "In-depth audits for public and private charitable trusts, verifying proper book records, Section 12A/80G compliance, and lawful fund deployment.",
    bullets: [
      "Form 10B / 10BB filing audit",
      "Corpus & expenditure audit",
      "Income tax exemption support",
    ],
  },
  {
    id: "institutional-audits",
    icon: GraduationCap,
    title: "Institutional Audits",
    subtitle: "Governance & Account Validation",
    description:
      "Thorough financial, governance, and management audits for educational, healthcare, and welfare institutions requiring reliable accountability.",
    bullets: [
      "Fee & revenue verification",
      "Government grant audits",
      "Asset & inventory controls",
    ],
  },
  {
    id: "fcra-audits",
    icon: Globe2,
    title: "FCRA Audits",
    subtitle: "Foreign Contribution Verification",
    description:
      "Meticulous FCRA-related audit and compliance support for organizations receiving foreign grants, ensuring foreign bank reconciliation and Form FC-4 reporting.",
    bullets: [
      "Foreign contribution scrutiny",
      "Form FC-4 certification",
      "MHA regulatory compliance",
    ],
  },
];

const AuditsSection = () => {
  return (
    <section
      id="audits-assurance"
      className="relative overflow-hidden bg-gradient-to-b from-[#F1EDFF] via-[#FAF8FF] to-[#F1EDFF] py-24"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-purple-200/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-amber-200/25 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#12345B] shadow-sm backdrop-blur-md">
            Audits & Assurance
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#12345B] md:text-5xl">
            Comprehensive Audit &
            <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Assurance Services
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Delivering precision, transparency, and regulatory rigor across every
            financial audit. Our assurance framework ensures complete statutory
            compliance, mitigates risk, and instills stakeholder confidence.
          </p>
        </motion.div>

        {/* 8 Audit Cards Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {auditTypes.map((audit, index) => {
            const Icon = audit.icon;
            return (
              <motion.div
                key={audit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl"
              >
                {/* Accent Top Bar on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-[#12345B] transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-slate-900 shadow-sm">
                    <Icon size={28} />
                  </div>

                  <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-amber-600">
                    {audit.subtitle}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-[#12345B]">
                    {audit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {audit.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                    {audit.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs font-medium text-slate-700"
                      >
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#0B5D4B] transition-colors duration-200 hover:text-amber-600"
                  >
                    Consult for Audit &rarr;
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Audit Advisory Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 rounded-3xl border border-white/20 bg-gradient-to-r from-[#12345B] via-slate-900 to-[#1e1b4b] p-8 text-center shadow-xl backdrop-blur-md text-white"
        >
          <p className="text-sm font-medium text-white md:text-base">
            Need compliance-oriented audit support or tailored internal controls
            for your organization?
            <Link
              to="/contact"
              className="ml-2 font-black text-amber-400 underline hover:text-yellow-300 transition"
            >
              Speak with our senior audit team &rarr;
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditsSection;

