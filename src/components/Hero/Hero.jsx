import { motion } from "framer-motion";
import { ArrowRight, Phone, BadgeCheck, Building2, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${assets.hero_img_bg})`,
        }}
      />

      {/* Dark Gradient Overlay for Maximum Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/60" />

      {/* Ambient Blur Effects */}
      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-amber-400/20 blur-[130px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-500/20 blur-[140px] pointer-events-none" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 pb-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-white/10 px-4 py-1.5 backdrop-blur-xl shadow-lg">
              <BadgeCheck className="text-amber-400 shrink-0" size={18} />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-200">
                12+ Years Experience • Audits &amp; Advisory
              </span>
            </div>

            <h1 className="font-cinzel mt-6 text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-extrabold tracking-[0.03em] sm:tracking-[0.05em] leading-[1.1] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
              M GHOSH{" "}
              <span className="inline-block bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(245,158,11,0.4)]">
                &amp; CO.
              </span>
            </h1>

            <div className="mt-3 flex items-center gap-3">
              <span className="h-[2px] w-6 sm:w-10 bg-gradient-to-r from-amber-400 to-transparent rounded-full" />
              <h2 className="font-cinzel text-base sm:text-lg md:text-xl font-bold uppercase tracking-[0.25em] text-amber-300 drop-shadow-[0_2px_12px_rgba(245,158,11,0.4)]">
                Chartered Accountants
              </h2>
              <span className="h-[2px] w-6 sm:w-10 bg-gradient-to-l from-amber-400 to-transparent rounded-full" />
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
               Provides trusted Statutory & Internal Audits,
              International Accounting (US Form 1120/1040, QuickBooks, Odoo),
              PF, ESI & Professional Tax Consultancy, and Corporate Advisory
              with uncompromising integrity and precision.
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group rounded-xl bg-amber-400 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-slate-950 shadow-lg transition duration-300 hover:bg-amber-500 hover:scale-105"
              >
                Book Consultation
                <ArrowRight className="ml-2 inline transition group-hover:translate-x-1" size={16} />
              </Link>

              <a
                href="tel:8240784998"
                className="rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/20 hover:border-amber-400"
              >
                <Phone className="mr-2 inline text-amber-400" size={15} />
                Call 8240784998
              </a>

              <a
                href="tel:9831996673"
                className="rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/20 hover:border-amber-400"
              >
                <Phone className="mr-2 inline text-amber-400" size={15} />
                9831996673
              </a>
            </div>

            {/* Quick Hero Trust Strip */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 max-w-lg">
              <div>
                <span className="text-2xl font-black text-amber-400 md:text-3xl">12+</span>
                <p className="text-xs text-slate-300">Years Exp.</p>
              </div>
              <div>
                <span className="text-2xl font-black text-amber-400 md:text-3xl">100+</span>
                <p className="text-xs text-slate-300">Companies Audited</p>
              </div>
              <div>
                <span className="text-2xl font-black text-amber-400 md:text-3xl">50+</span>
                <p className="text-xs text-slate-300">NGOs Served</p>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Badge Cards */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="hidden lg:block lg:col-span-5"
          >
            <div className="relative space-y-5">
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 font-black shadow-md">
                    <Globe2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Global Accounting & Audits
                    </h3>
                    <p className="text-xs text-slate-300">
                      US Tax (Form 1120/1040), QuickBooks, Odoo & Cross-Border Advisory
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="ml-8 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white font-black shadow-md">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Comprehensive Assurance
                    </h3>
                    <p className="text-xs text-slate-300">
                      Statutory, Internal, Company, LLP & NGO Audits
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
