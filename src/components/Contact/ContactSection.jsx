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
📍 Address : ${form.address}`;

    const url = `https://wa.me/919831996673?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-slate-300 via-gray-400 to-blue-400 py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 mt-20">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[5px] text-3xl font-semibold text-blue-600">
            Contact Us
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Let's Connect
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-black text-xl leading-8">
            Whether you need expert advice on Taxation, Audit, Company
            Registration, GST or Financial Consulting, we're always ready to
            help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/70 backdrop-blur-xl p-10 shadow-xl border border-white"
          >
            <h3 className="text-3xl font-bold mb-10">Contact Information</h3>

            <div className="space-y-8">
              {/* Head Office */}

              <div className="flex gap-5">
                <div className="bg-cyan-100 p-3 rounded-xl text-cyan-600">
                  <Building2 size={28} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Head Office</h4>

                  <p className="text-slate-600 mt-1 leading-7">
                    57 Atindra Mukherjee Lane,
                    <br />
                    Shibpur, Howrah - 711102
                  </p>
                </div>
              </div>

              {/* Branch */}

              <div className="flex gap-5">
                <div className="bg-cyan-100 p-3 rounded-xl text-cyan-600">
                  <MapPin size={28} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Branch Office</h4>

                  <p className="text-slate-600 mt-1">
                    Chatta, Maheshtala – Budge Budge
                  </p>
                </div>
              </div>

              {/* Phone */}

              <div className="flex gap-5">
                <div className="bg-cyan-100 p-3 rounded-xl text-cyan-600">
                  <Phone size={28} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>

                  <a
                    href="tel:+919831996673"
                    className="block hover:text-cyan-600 transition"
                  >
                    +91 98319 96673
                  </a>

                  <a
                    href="tel:+918240784998"
                    className="block hover:text-cyan-600 transition"
                  >
                    +91 82407 84998
                  </a>
                </div>
              </div>

              {/* Email */}

              <div className="flex gap-5">
                <div className="bg-cyan-100 p-3 rounded-xl text-cyan-600">
                  <Mail size={28} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Email</h4>

                  <a
                    href="mailto:mghoshco.ca@gmail.com"
                    className="hover:text-cyan-600 transition"
                  >
                    mghoshco.ca@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.form
            onSubmit={sendWhatsApp}
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/70 backdrop-blur-xl p-10 shadow-xl border border-white"
          >
            <h3 className="text-3xl font-bold mb-8">Client Enquiry</h3>

            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Client Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-500 px-5 py-4 outline-none focus:border-cyan-700"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-500 px-5 py-4 outline-none focus:border-cyan-700"
              />

              <textarea
                rows="5"
                name="address"
                placeholder="Your Enquiry..."
                required
                value={form.address}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-500 px-5 py-4 outline-none focus:border-cyan-700"
              />

              <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-600 py-4 font-semibold text-white transition hover:bg-slate-900">
                <Send size={20} />
                Send via WhatsApp
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
