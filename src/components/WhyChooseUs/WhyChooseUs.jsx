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
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    description:
      "Professional accounting, audit and taxation services with complete integrity and compliance.",
  },
  {
    icon: Clock3,
    title: "Timely Compliance",
    description:
      "Ensuring all statutory filings and regulatory deadlines are met without delays.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "Every client receives personalized financial guidance based on their business goals.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Advisory",
    description:
      "Helping businesses make informed financial decisions for sustainable growth.",
  },
  {
    icon: Scale,
    title: "Ethical Practices",
    description:
      "Maintaining transparency, confidentiality and the highest professional standards.",
  },
  {
    icon: Handshake,
    title: "Long-Term Relationships",
    description:
      "Building trusted partnerships through consistent quality and dedicated support.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-amber-50 to-yellow-100 py-24">
      {/* Background Blur Effects */}

      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-amber-300/30 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-yellow-300/20 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-amber-400/30 bg-white/70 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-amber-700 backdrop-blur-xl">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            Your Trusted Partner For
            <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Financial Excellence
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We combine technical expertise, professional ethics and personalized
            advisory services to help businesses, NGOs and individuals achieve
            financial stability, regulatory compliance and sustainable growth.
          </p>
        </motion.div>
        {/* Feature Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-8 backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-amber-300 hover:shadow-2xl"
              >
                {/* Icon */}

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg transition duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-8 text-slate-600">
                  {feature.description}
                </p>

                {/* Hover Line */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500 group-hover:w-full"></div>
              </motion.div>
            );
          })}
        </div>
        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-24 overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-8 py-14 shadow-2xl lg:px-16"
        >
          {/* Glow */}
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-amber-400/20 blur-[100px]" />
          <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-yellow-400/10 blur-[120px]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div>
              <span className="rounded-full bg-amber-400/20 px-4 py-2 text-sm font-semibold text-amber-300">
                Ready to Get Started?
              </span>

              <h3 className="mt-5 text-3xl font-black text-white md:text-4xl">
                Let's Discuss Your Financial Goals
              </h3>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Whether you need audit services, taxation support, GST
                compliance, company law advisory or FCRA consultancy, we're here
                to provide practical and reliable financial solutions tailored
                to your needs.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30"
            >
              Book Consultation
              <ArrowRight
                size={20}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
