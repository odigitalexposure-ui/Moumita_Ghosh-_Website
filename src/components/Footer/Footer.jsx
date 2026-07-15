import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      // { name: "Industries", path: "/industries" },
      // { name: "Testimonials", path: "/testimonials" },
      { name: "Contact", path: "/contact" },
    ],
  },

  {
    title: "Our Expertise",
    links: [
      { name: "Audit & Assurance", path: "/services" },
      { name: "GST Consultancy", path: "/services" },
      { name: "Income Tax", path: "/services" },
      { name: "FCRA Compliance", path: "/services" },
      { name: "Company Law", path: "/services" },
      { name: "Financial Advisory", path: "/services" },
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-white">
              M Ghosh
              <span className="text-amber-400"> & Co.</span>
            </h2>

            <p className="mt-2 text-sm text-amber-300">Chartered Accountants</p>

            <p className="mt-6 text-slate-300 leading-7">
              Professional financial advisory firm providing Audit, Taxation,
              GST, FCRA and Corporate Compliance solutions with integrity and
              excellence.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <h3 className="font-semibold text-white">CA Moumita Ghosh</h3>

              <p className="mt-2 text-sm text-amber-300">
                FCA | Company Secretary | FCRA Specialist | M.COM
              </p>
            </div>
          </motion.div>

          {/* Navigation Sections */}

          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <h3 className="text-xl font-bold text-white">{section.title}</h3>

              <ul className="mt-6 space-y-4">
                {section.links.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="group flex items-center text-slate-300 transition duration-300 hover:text-amber-400"
                    >
                      <ArrowRight
                        size={15}
                        className="mr-2 text-amber-400 transition-transform duration-300 group-hover:translate-x-1"
                      />

                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            <h3 className="text-xl font-bold text-white">Contact Us</h3>

            <div className="mt-6 space-y-5">
              {/* Email */}

              <a
                href="mailto:mghoshco.ca@gmail.com"
                className="group flex gap-3 text-slate-300 hover:text-amber-400 transition"
              >
                <Mail size={20} className="text-amber-400 shrink-0" />

                <span>mghoshco.ca@gmail.com</span>
              </a>

              {/* Phone */}

              <a
                href="tel:+919831996673"
                className="group flex gap-3 text-slate-300 hover:text-amber-400 transition"
              >
                <Phone size={20} className="text-amber-400 shrink-0" />

                <span>+91 98319 96673</span>
              </a>

              {/* WhatsApp */}

              <a
                href="https://wa.me/919831996673"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3 text-slate-300 hover:text-amber-400 transition"
              >
                <MessageCircle size={20} className="text-amber-400 shrink-0" />

                <span>WhatsApp Consultation</span>
              </a>

              {/* Location */}

              <div className="flex gap-3 text-slate-300">
                <MapPin size={22} className="text-amber-400 shrink-0" />

                <div>
                  <p>Head Office:</p>

                  <p className="text-sm mt-1">
                    57 Atindra Mukherjee Lane,
                    <br />
                    Shibpur, Howrah - 711102
                  </p>

                  <p className="mt-3 text-sm">
                    Branch:
                    <br />
                    Chatta, Maheshtala – Budge Budge
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}

        <p className="text-sm text-slate-400">
          <span className="font-semibold text-white">M Ghosh & Co. </span>{" "}
          <br /> FCA | Company Secretary | FCRA Specialist Chartered
          Accountants.
        </p>
        {/* Bottom Copyright Section */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative z-10 mt-16 border-t border-white/10"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center md:flex-row md:text-left lg:px-8">
            {/* Qualification Badge */}

            <div
              className="
            rounded-full 
            border 
            border-amber-400/30 
            bg-white/5 
            px-5 
            py-2 
            text-sm 
            text-amber-300 
            backdrop-blur-xl
            "
            >
              {/* Copyright */}
              <p className="text-sm text-slate-200">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-white">M Ghosh & Co.</span>{" "}
                Chartered Accountants. All Rights Reserved.
              </p>
              Design & Developed By{" "}
              <a
                href="https://www.teamdeoskolkata.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
              >
                Digital Exposure Online Service
              </a>
              .
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
export default Footer;
