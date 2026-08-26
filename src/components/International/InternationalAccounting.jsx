import { motion } from "framer-motion";
import {
  Globe,
  FileText,
  Calculator,
  Laptop,
} from "lucide-react";
import { Link } from "react-router-dom";

const internationalServices = [
  {
    icon: Globe,
    title: "International Accounting Support",
    description:
      "Cross-border financial statement preparation, multi-currency bookkeeping support, and standard GAAP/IFRS alignment for global entities.",
    points: [
      "Multi-currency ledger management",
      "Global bookkeeping support",
      "Financial consolidation assistance",
    ],
  },
  {
    icon: Calculator,
    title: "International Taxation Support",
    description:
      "Strategic cross-border tax advisory, withholding tax documentation, foreign transaction tax assistance, and international business accounting assistance.",
    points: [
      "Cross-border tax compliance",
      "Withholding tax advisory",
      "Expatriate tax coordination",
    ],
  },
  {
    icon: FileText,
    title: "US Tax-Related Accounting Support",
    description:
      "Specialized accounting and documentation support for US tax returns, including Form 1120 corporate and Form 1040 individual preparation support.",
    points: [
      "Form 1120 corporate return support",
      "Form 1040 individual return support",
      "US tax preparation & schedule analysis",
    ],
  },
  {
    icon: Laptop,
    title: "Accounting System Support",
    description:
      "Expert configuration, migration, and ongoing management of industry-leading cloud accounting software tailored to your workflow.",
    points: [
      "QuickBooks system setup & support",
      "Odoo ERP accounting configuration",
      "Chart of accounts optimization",
    ],
  },
];

const softwarePlatforms = [
  {
    name: "QuickBooks",
    role: "Cloud Accounting & Bookkeeping Software",
    desc: "End-to-end setup, bank feed reconciliations, invoice tracking, and periodic financial reporting.",
  },
  {
    name: "Odoo",
    role: "Integrated Business & ERP Accounting",
    desc: "Configuration of accounting modules, invoicing workflows, multi-company ledgers, and automated entries.",
  },
];

const InternationalAccounting = () => {
  return (
    <section
      id="international-accounting"
      className="relative overflow-hidden bg-gradient-to-b from-[#EAF6FF] via-[#F4FAFF] to-[#EAF6FF] py-24"
    >
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-sky-200/40 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-amber-200/25 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#12345B] shadow-sm backdrop-blur-md">
            Global Advisory
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#12345B] md:text-5xl">
            International Accounting &
            <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Taxation Support
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Bridging international compliance standards with precision. We provide
            cross-border businesses, global consultants, and overseas entities with
            dependable bookkeeping support, US tax preparation assistance, and
            system integration expertise.
          </p>
        </motion.div>

        {/* 4 Service Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {internationalServices.map((srv, index) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-sky-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-xl"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-[#12345B] shadow-sm transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-slate-900">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#12345B]">
                    {srv.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {srv.description}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                    {srv.points.map((pt, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs font-semibold text-slate-700"
                      >
                        <span className="mr-2.5 h-1.5 w-1.5 rounded-full bg-amber-500" />
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#0B5D4B] transition-colors duration-200 hover:text-amber-600"
                  >
                    Request Global Support &rarr;
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Software Platform Support Strip with Rich Dark Navy Background & White/Yellow Text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-r from-[#12345B] via-slate-900 to-[#102A45] p-8 shadow-xl text-white"
        >
          <div className="grid items-center gap-8 lg:grid-cols-3">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                Accounting Software Support
              </span>
              <h4 className="mt-2 text-2xl font-bold text-white">
                Proficiency in Leading Global Platforms
              </h4>
              <p className="mt-2 text-sm text-slate-300">
                Seamless implementation, migration, and daily reconciliations using
                established cloud systems.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {softwarePlatforms.map((plat) => (
                <div
                  key={plat.name}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur-md transition hover:border-amber-400/60 hover:bg-white/15"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-white">
                      {plat.name}
                    </span>
                    <span className="rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] font-black text-slate-950">
                      Expertise
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-bold text-amber-300">
                    {plat.role}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-200">
                    {plat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternationalAccounting;
