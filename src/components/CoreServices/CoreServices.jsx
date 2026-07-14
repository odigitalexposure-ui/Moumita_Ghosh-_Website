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
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: FileSearch,
    title: "Audit & Assurance",
    description:
      "Comprehensive statutory, internal and tax audit services that ensure transparency, compliance and financial reliability.",
  },
  {
    number: "02",
    icon: Receipt,
    title: "GST Consultancy",
    description:
      "Complete GST registration, return filing, advisory and compliance services for businesses of every size.",
  },
  {
    number: "03",
    icon: Landmark,
    title: "Income Tax",
    description:
      "Expert tax planning, return filing and representation to optimize taxation while ensuring legal compliance.",
  },
  {
    number: "04",
    icon: Building2,
    title: "Company Law",
    description:
      "Professional advisory on company incorporation, ROC compliance and corporate governance matters.",
  },
  {
    number: "05",
    icon: Globe2,
    title: "FCRA Compliance",
    description:
      "Specialized consultancy for NGOs and charitable organizations regarding FCRA registration and compliance.",
  },
  {
    number: "06",
    icon: BriefcaseBusiness,
    title: "Financial Advisory",
    description:
      "Strategic financial consulting, business planning and advisory solutions for sustainable business growth.",
  },
];

const CoreServices = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-yellow-50 py-24">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-300/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-yellow-300/20 blur-[160px]" />

      {/* Decorative Circle */}
      <div className="absolute top-28 right-16 hidden h-64 w-64 rounded-full border border-amber-200/40 lg:block" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-10 lg:grid-cols-2 lg:items-end"
        >
          {/* Left Side */}

          <div>
            <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-amber-700">
              Our Core Services
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              Professional Solutions
              <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Tailored For Your Business
              </span>
            </h2>
          </div>

          {/* Right Side */}

          <div className="lg:pl-16">
            <p className="text-lg leading-8 text-slate-600">
              We provide comprehensive accounting, taxation and compliance
              services designed to help businesses, startups, NGOs and
              individuals confidently manage financial responsibilities,
              regulatory requirements and long-term growth.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(251,191,36,0.25)]"
              >
                {/* Animated Left Border */}

                <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-amber-400 via-amber-500 to-orange-500 transition-transform duration-500 group-hover:scale-y-100" />

                {/* Service Number */}

                <span className="text-6xl font-black text-slate-100 transition duration-300 group-hover:text-amber-100">
                  {service.number}
                </span>

                {/* Icon */}

                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-white shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={28} />
                </div>

                {/* Title */}

                <h3 className="mt-7 text-2xl font-bold leading-tight text-slate-900">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-8 text-slate-600">
                  {service.description}
                </p>

                {/* Learn More */}

                <Link
                  to="/services"
                  className="mt-8 inline-flex items-center font-semibold text-amber-600 transition duration-300 group-hover:text-orange-500"
                >
                  Learn More
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
