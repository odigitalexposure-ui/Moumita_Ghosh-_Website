import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  BadgeCheck,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${assets.hero_bg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/10 via-slate-900/20 to-slate-900/10" />

      {/* Blur Effects */}
      <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-amber-400/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 mt-20">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-white/10 px-5 py-2 backdrop-blur-3xl">
              <BadgeCheck className="text-amber-400" size={18} />
              <span className="text-sm text-white">
                Trusted Chartered Accountant Firm
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
              Financial Excellence
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Beyond Numbers
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              M Ghosh & Co., Chartered Accountants provides professional Audit,
              Taxation, GST, FCRA, Company Law and Financial Advisory services
              with integrity, expertise and excellence.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                to="/contact"
                className="group rounded-xl bg-amber-400 px-7 py-4 font-semibold text-slate-900 transition duration-300 hover:scale-105"
              >
                Book Consultation
                <ArrowRight className="ml-2 inline transition group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
              >
                <Phone className="mr-2 inline" size={18} />
                Contact Us
              </Link>
            </div>

            {/* Statistics */}

            <div className="mt-14 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-4xl font-bold text-amber-400">40+</h3>
                <p className="mt-2 text-gray-400">Companies Audited</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-amber-400">10+</h3>
                <p className="mt-2 text-gray-400">NGO Clients</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-amber-400">12+</h3>
                <p className="mt-2 text-gray-400">Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur-2xl">
              <h2 className="text-3xl font-bold text-white">Why Choose Us?</h2>

              <div className="mt-8 space-y-6">
                {[
                  "Statutory & Internal Audit",
                  "GST & Income Tax Consultancy",
                  "FCRA Compliance",
                  "Corporate Law Advisory",
                  "International Accounting",
                  "NGO Compliance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="rounded-full bg-amber-800/10 p-2">
                      <ShieldCheck className="text-amber-200" size={20} />
                    </div>

                    <span className="text-gray-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -right-6 top-8 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
            >
              <h3 className="text-5xl font-black text-amber-400">100%</h3>

              <p className="mt-2 text-white">Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-white" size={36} />
      </motion.div>
    </section>
  );
};

export default Hero;
