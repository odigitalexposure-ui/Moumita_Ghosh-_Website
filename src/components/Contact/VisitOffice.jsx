import { motion } from "framer-motion";
import { MapPinned, CreditCard, Phone, Mail } from "lucide-react";
import { assets } from "../../assets/assets";

const VisitOffice = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F1EDFF] via-[#FAF8FF] to-[#F1EDFF] py-24">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-200/25 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="uppercase tracking-[4px] text-xs font-bold text-[#12345B] bg-white border border-sky-200 px-4 py-1.5 rounded-full shadow-xs">
            Visit Our Office
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#12345B]">
            Connect With Our Team
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 leading-relaxed text-sm md:text-base">
            You're always welcome to visit our office for in-person consultation
            regarding Statutory Audits, International Accounting, Taxation, PF, ESI,
            and Corporate Advisory services.
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT: Visiting Card & Direct Contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-3xl border border-white bg-white/85 p-8 shadow-xl backdrop-blur-xl"
          >
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
                  <CreditCard size={26} />
                </div>
                <h3 className="text-2xl font-bold text-[#12345B]">
                  Official Visiting Card
                </h3>
              </div>

              <div className="flex justify-center">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-md">
                  <img
                    src={assets.visiting_card}
                    alt="M Ghosh & Co Visiting Card"
                    className="h-auto w-full max-w-[320px] rounded-xl object-contain transition duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <p className="mt-6 text-center text-xs text-slate-600">
                Save our visiting card for quick access to our credentials and
                verified office information.
              </p>
            </div>

            {/* Quick Phone Call Pill inside Card */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#12345B]">
              <a
                href="tel:8240784998"
                className="inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700"
              >
                <Phone size={14} /> 8240784998
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="tel:9831996673"
                className="inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700"
              >
                <Phone size={14} /> 9831996673
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="mailto:mghoshco.ca@gmail.com"
                className="inline-flex items-center gap-1.5 text-[#0B5D4B] hover:underline"
              >
                <Mail size={14} /> mghoshco.ca@gmail.com
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-3xl border border-white bg-white/85 p-8 shadow-xl backdrop-blur-xl"
          >
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-sky-100 p-3 text-sky-700">
                  <MapPinned size={26} />
                </div>
                <h3 className="text-2xl font-bold text-[#12345B]">
                  Find Us on Map
                </h3>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                <iframe
                  title="M Ghosh & Co. Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.518728152621!2d88.3156344629491!3d22.574252571846227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277f6353af01d%3A0x3ea94fc84f6dafb9!2sM%20GHOSH%20%26Co!5e0!3m2!1sen!2sin!4v1784031239569!5m2!1sen!2sin"
                  className="h-[340px] w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>

            <p className="mt-6 text-center text-xs leading-relaxed text-slate-600">
              Visit <strong className="text-[#12345B]">M Ghosh & Co.</strong> at
              57 Atindra Mukherjee Lane, Shibpur, Howrah for consultation on
              Audits, International Taxation, PF/ESI/P.Tax, and Corporate Compliance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitOffice;

