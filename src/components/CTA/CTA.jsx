import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall, BriefcaseBusiness } from "lucide-react";
const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-28">
      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-[140px]" />

      <div className="absolute -bottom-32 -right-20 h-[32rem] w-[32rem] rounded-full bg-yellow-400/10 blur-[160px]" />

      {/* Decorative Grid */}

      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* Main Container */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Glass Card */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.45)] lg:p-16"
        >
          {/* Amber Glow */}

          <div className="absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 backdrop-blur-xl"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-amber-300">
                Let's Work Together
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl"
            >
              Ready to Strengthen
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Your Financial Foundation?
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300"
            >
              At <span className="font-semibold text-white">M Ghosh & Co.</span>
              , we believe every business deserves trusted financial guidance
              and practical compliance solutions. From Audit and Taxation to
              GST, Company Law and FCRA Consultancy, we help businesses and
              organizations grow with confidence while remaining fully
              compliant.
            </motion.p>

            {/* Signature */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-white">
                CA Moumita Ghosh
              </h3>

              <p className="mt-2 text-base text-amber-300">
                FCA | Company Secretary | FCRA Specialist
              </p>
            </motion.div>

            {/* Action Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row"
            >
              {/* Book Consultation */}

              <Link
                to="/contact"
                className="group inline-flex items-center rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-8 py-4 font-semibold text-slate-900 shadow-lg transition-all duration-300 
                hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_40px_rgba(251,191,36,0.40)]"
              >
                <PhoneCall
                  size={20}
                  className="mr-2 transition-transform duration-300 group-hover:rotate-12"
                />
                Book Consultation
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Explore Services */}

              <Link
                to="/services"
                className="group inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-white/15"
              >
                <BriefcaseBusiness size={20} className="mr-2 text-amber-300" />
                Explore Services
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Divider */}

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mx-auto mt-16 h-px w-40 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
            />

            {/* Trust Highlights */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 grid gap-5 md:grid-cols-3"
            >
              {[
                "Professional Excellence",
                "Trusted Financial Advisory",
                "Client-Focused Approach",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl transition duration-300 hover:border-amber-400/40 hover:bg-white/10"
                >
                  <p className="font-semibold text-slate-200">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
          {/* Decorative Glow */}

          <div className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-400/10 blur-[100px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
