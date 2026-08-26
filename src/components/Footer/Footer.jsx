import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "All Services", path: "/services" },
      { name: "Contact & Location", path: "/contact" },
    ],
  },
  {
    title: "Our Expertise",
    links: [
      { name: "Audits & Assurance", path: "/services" },
      { name: "International Accounting & Taxation", path: "/services" },
      { name: "PF, ESI & Professional Tax Consultancy", path: "/services" },
      { name: "GST & Direct Taxation", path: "/services" },
      { name: "FCRA & NGO Compliance", path: "/services" },
      { name: "Company Law & Corporate Advisory", path: "/services" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-20">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-yellow-400/10 blur-[150px]" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-white">
              M Ghosh
              <span className="text-amber-400"> & Co.</span>
            </h2>

            <p className="mt-2 text-sm font-semibold text-amber-300">
              Chartered Accountants
            </p>

            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              Professional accounting, auditing, taxation and compliance consultancy
              firm providing comprehensive Audits & Assurance, International Accounting
              (Form 1120, Form 1040, QuickBooks, Odoo), and PF / ESI / Professional
              Tax solutions with integrity and precision.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <h3 className="font-bold text-white text-sm">CA Moumita Ghosh</h3>
              <p className="mt-1 text-xs text-amber-300 font-medium">
                FCA | Company Secretary | M.COM
              </p>
            </div>
          </motion.div>

          {/* Navigation Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                {section.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {section.links.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="group flex items-center text-xs text-slate-300 transition duration-200 hover:text-amber-400"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 text-amber-400 transition-transform duration-200 group-hover:translate-x-1"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section - BOTH PHONES REQUIRED */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-xs">
              {/* Phone 1 */}
              <a
                href="tel:8240784998"
                className="group flex items-center gap-3 text-slate-300 hover:text-amber-400 transition"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400/20 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-900 transition">
                  <Phone size={14} />
                </div>
                <span>+91 82407 84998</span>
              </a>

              {/* Phone 2 */}
              <a
                href="tel:9831996673"
                className="group flex items-center gap-3 text-slate-300 hover:text-amber-400 transition"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400/20 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-900 transition">
                  <Phone size={14} />
                </div>
                <span>+91 98319 96673</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919831996673"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-slate-300 hover:text-amber-400 transition"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-slate-900 transition">
                  <MessageCircle size={14} />
                </div>
                <span>WhatsApp Consultation</span>
              </a>

              {/* Email */}
              <a
                href="mailto:mghoshco.ca@gmail.com"
                className="group flex items-center gap-3 text-slate-300 hover:text-amber-400 transition"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400/20 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-900 transition">
                  <Mail size={14} />
                </div>
                <span>mghoshco.ca@gmail.com</span>
              </a>

              {/* Location */}
              <div className="flex gap-3 pt-2 text-slate-300">
                <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <p className="font-semibold text-white">Head Office:</p>
                  <p className="text-slate-400">
                    57 Atindra Mukherjee Lane, Shibpur, Howrah - 711102
                  </p>
                  <p className="font-semibold text-white pt-1">Branch:</p>
                  <p className="text-slate-400">
                    Chatta, Maheshtala – Budge Budge
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 pb-10">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-slate-400 md:flex-row md:text-left">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-bold text-white">M Ghosh & Co.</span> Chartered
              Accountants. All Rights Reserved.
            </p>
            <p>
              Design & Developed By{" "}
              <a
                href="https://www.teamdeoskolkata.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-200 hover:text-amber-400 transition-colors"
              >
                Digital Exposure Online Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
