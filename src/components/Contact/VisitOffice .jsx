import { motion } from "framer-motion";
import { MapPinned, CreditCard } from "lucide-react";

// Replace with your image
import { assets } from "../../assets/assets";

const VisitOffice = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-24">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="uppercase tracking-[5px] font-semibold text-cyan-600">
            Visit Our Office
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Meet Our Team
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-600 leading-8">
            You're always welcome to visit our office for personalized
            consultation regarding taxation, audit, GST, compliance, accounting,
            and business advisory services.
          </p>
        </motion.div>

        {/* Two Columns */}

        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white bg-white/70 p-8 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-cyan-100 p-3 text-cyan-600">
                <CreditCard size={28} />
              </div>

              <h3 className="text-3xl font-bold text-slate-900">
                Visiting Card
              </h3>
            </div>

            <div className="flex justify-center">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
                <img
                  src={assets.visiting_card}
                  alt="Visiting Card"
                  className="h-auto w-full max-w-[320px] rounded-xl object-contain transition duration-500 hover:scale-105"
                />
              </div>
            </div>

            <p className="mt-6 text-center text-slate-600">
              Save our visiting card for quick access to our office information
              and contact details.
            </p>
          </motion.div>

          {/* RIGHT */}

          {/* <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white bg-white/70 p-8 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-cyan-100 p-3 text-cyan-600">
                <MapPinned size={28} />
              </div>

              <h3 className="text-3xl font-bold text-slate-900">
                Find Us on Map
              </h3>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg">
              <iframe
                title="M Ghosh & Co."
                src="YOUR_GOOGLE_MAP_EMBED_LINK"
                width="100%"
                height="430"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>

            <p className="mt-6 text-center text-slate-600">
              Easily locate our office and plan your visit with Google Maps.
            </p>
          </motion.div> */}

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white bg-white/80 p-8 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-cyan-100 p-3 text-cyan-600">
                <MapPinned size={28} />
              </div>

              <h3 className="text-3xl font-bold text-slate-900">
                Find Us on Map
              </h3>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
              <iframe
                title="M Ghosh & Co."
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.518728152621!2d88.3156344629491!3d22.574252571846227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277f6353af01d%3A0x3ea94fc84f6dafb9!2sM%20GHOSH%20%26Co!5e0!3m2!1sen!2sin!4v1784031239569!5m2!1sen!2sin"
                className="h-[380px] w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>

            <p className="mt-6 text-center text-slate-600 leading-7">
              Visit{" "}
              <span className="font-semibold text-slate-800">
                M Ghosh & Co.
              </span>
              &nbsp;for expert Chartered Accountancy, Taxation, GST, Audit, ROC
              Compliance, FCRA, and Financial Advisory services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitOffice;
