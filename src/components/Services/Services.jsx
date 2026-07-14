import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  FileSearch,
  Receipt,
  Landmark,
  Building2,
  Globe2,
  BriefcaseBusiness,
  Scale,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    id: "statutory-audit",
    number: "01",
    icon: FileSearch,
    title: "Statutory Audit",
    description:
      "Comprehensive statutory and compliance audits ensuring financial transparency and regulatory confidence.",
  },

  {
    id: "taxation",
    number: "02",
    icon: Receipt,
    title: "Taxation",
    description:
      "GST, Income Tax, TDS, Corporate Tax and strategic tax planning for businesses and individuals.",
  },

  {
    id: "company-law",
    number: "03",
    icon: Building2,
    title: "Company Law",
    description:
      "Company registration, ROC compliance, governance and legal corporate advisory services.",
  },

  {
    id: "fcra",
    number: "04",
    icon: Globe2,
    title: "FCRA Services",
    description:
      "Registration, renewal, FC-4 filing and complete foreign contribution compliance support.",
  },

  {
    id: "ngo",
    number: "05",
    icon: ShieldCheck,
    title: "NGO & Trust",
    description:
      "Registration, 12A, 80G, Trust Audit, CSR compliance and legal advisory services.",
  },

  {
    id: "financial",
    number: "06",
    icon: BriefcaseBusiness,
    title: "Financial Consultancy",
    description:
      "Business planning, financial advisory, international accounting and growth consulting.",
  },

  {
    id: "international",
    number: "07",
    icon: Landmark,
    title: "International Accounting",
    description:
      "QuickBooks, Odoo, foreign taxation and accounting solutions for global businesses.",
  },

  {
    id: "corporate",
    number: "08",
    icon: Scale,
    title: "Corporate Governance",
    description:
      "Agreement drafting, compliance management and governance solutions for organizations.",
  },
];

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-amber-50 to-yellow-50 py-24">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-300/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-yellow-300/20 blur-[170px]" />

      {/* Decorative Circle */}
      <div className="absolute right-10 top-24 hidden h-72 w-72 rounded-full border border-amber-200/40 lg:block" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-12 lg:grid-cols-2 lg:items-end"
        >
          {/* Left */}

          <div>
            <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-amber-700">
              Professional Services
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
              Solutions Built
              <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Around Your Success
              </span>
            </h2>
          </div>

          {/* Right */}

          <div className="lg:pl-12">
            <p className="text-lg leading-9 text-slate-600">
              Whether you're a startup, established business, NGO, trust or
              multinational organization, M Ghosh & Co. delivers professional
              financial, taxation, audit, compliance and advisory services
              tailored to your goals.
            </p>
          </div>
        </motion.div>

        {/* Services Grid will come here */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="group relative flex h-full overflow-hidden rounded-3xl border border-amber-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-amber-300 hover:shadow-[0_20px_60px_rgba(251,191,36,0.25)]"
                >
                  {/* Left Accent Line */}
                  <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-400 via-orange-500 to-yellow-400 transition-transform duration-500 group-hover:scale-y-100" />

                  {/* Large Number */}
                  <div className="mr-8 flex-shrink-0">
                    <span className="text-6xl font-black text-slate-100 transition duration-300 group-hover:text-amber-200">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-white shadow-lg transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={30} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 leading-8 text-slate-600">
                      {service.description}
                    </p>

                    {/* Learn More */}
                    <div className="mt-8 inline-flex items-center font-semibold text-amber-600 transition duration-300 group-hover:text-orange-500">
                      Explore Service
                      <ArrowRight
                        size={18}
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 p-10 shadow-[0_25px_80px_rgba(0,0,0,.35)] lg:p-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[2fr_1fr]">
            {/* Left Content */}

            <div>
              <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-amber-300">
                Need Professional Guidance?
              </span>

              <h3 className="mt-6 text-3xl font-black leading-tight text-white md:text-5xl">
                Let's Simplify Your
                <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Financial & Compliance Journey
                </span>
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Whether you need Audit, GST, Income Tax, Company Registration,
                FCRA Compliance or Financial Advisory, our experts provide
                practical, transparent and result-oriented solutions tailored to
                your business needs.
              </p>
            </div>

            {/* Right Buttons */}

            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_40px_rgba(251,191,36,.35)]"
              >
                Book Consultation
                <ArrowRight
                  size={18}
                  className="ml-2 transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-amber-400/40 hover:bg-white/10"
              >
                Know Our Firm
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
