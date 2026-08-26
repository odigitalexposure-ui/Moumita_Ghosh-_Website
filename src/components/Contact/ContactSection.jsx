import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Building2 } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const message = `Hello M Ghosh & Co.

*Client Enquiry*

👤 Name : ${form.name}
📞 Phone : ${form.phone}
📍 Details / Query : ${form.address}`;

    const url = `https://wa.me/919831996673?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EAF6FF] via-[#F4FAFF] to-[#EAF6FF] pt-32 pb-24">
      {/* Ambient background glow */}
      <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-sky-200/40 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-amber-200/25 blur-[130px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 lg:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[4px] text-xs font-bold text-[#12345B] bg-white border border-sky-200 px-4 py-1.5 rounded-full shadow-xs">
            Contact & Consultations
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-black text-[#12345B]">
            Let's Discuss Your
            <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Financial & Audit Needs
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed">
            Whether you need expert counsel on Statutory Audits, International
            Accounting, US Tax Returns (Form 1120/1040), PF/ESI/P.Tax Compliance,
            or GST, we are here to support your growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/85 backdrop-blur-xl p-8 lg:p-10 shadow-xl border border-white flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#12345B] mb-8">
                Direct Contact Information
              </h2>

              <div className="space-y-6">
                {/* Head Office */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-[#12345B]">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#12345B]">Head Office</h3>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      57 Atindra Mukherjee Lane,
                      <br />
                      Shibpur, Howrah - 711102
                    </p>
                  </div>
                </div>

                {/* Branch Office */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-[#12345B]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#12345B]">Branch Office</h3>
                    <p className="text-slate-600 text-xs mt-1">
                      Chatta, Maheshtala – Budge Budge
                    </p>
                  </div>
                </div>

                {/* Direct Phone Lines - BOTH NUMBERS REQUIRED */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#12345B]">
                      Direct Telephone Lines
                    </h3>
                    <div className="mt-1 space-y-1">
                      <a
                        href="tel:8240784998"
                        className="block text-sm font-bold text-amber-600 hover:text-amber-700 transition"
                      >
                        +91 82407 84998
                      </a>
                      <a
                        href="tel:9831996673"
                        className="block text-sm font-bold text-amber-600 hover:text-amber-700 transition"
                      >
                        +91 98319 96673
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-[#12345B]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#12345B]">Official Email</h3>
                    <a
                      href="mailto:mghoshco.ca@gmail.com"
                      className="text-xs font-semibold text-slate-700 hover:text-[#0B5D4B] transition"
                    >
                      mghoshco.ca@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Pill */}
            <div className="mt-8 pt-6 border-t border-slate-100 rounded-2xl bg-sky-50/70 p-4 text-xs font-medium text-slate-600">
              <span className="font-bold text-[#12345B]">
                Trusted by 100+ Companies Globally & 50+ NGOs
              </span>{" "}
              for regulatory audits, taxation, and corporate governance.
            </div>
          </motion.div>

          {/* RIGHT: Quick WhatsApp Form */}
          <motion.form
            onSubmit={sendWhatsApp}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/85 backdrop-blur-xl p-8 lg:p-10 shadow-xl border border-white flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#12345B] mb-2">
                Send Client Enquiry
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Receive prompt consultation via official WhatsApp communication.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name / Entity Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Rahul Sharma / ABC Pvt Ltd"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="e.g. 9831996673"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Service Required / Specific Enquiry *
                  </label>
                  <textarea
                    rows="4"
                    name="address"
                    placeholder="Describe your requirement (e.g. Statutory Audit, US Form 1120/1040, PF/ESI consultancy, GST filing...)"
                    required
                    value={form.address}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-amber-400 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 transition hover:bg-amber-500 hover:shadow-lg"
            >
              <Send size={16} />
              Submit via WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
