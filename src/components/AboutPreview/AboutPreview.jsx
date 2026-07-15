import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  ShieldCheck,
  BriefcaseBusiness,
  Landmark,
} from "lucide-react";
import { assets } from "../../assets/assets";

const highlights = [
  {
    icon: <BadgeCheck size={20} />,
    title: "FCA Qualified",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Company Secretary",
  },
  {
    icon: <Landmark size={20} />,
    title: "FCRA Specialist",
  },
  {
    icon: <BriefcaseBusiness size={20} />,
    title: "Business Advisory",
  },
];

const AboutPreview = () => {
  return (
    <section className="bg-linear-to-br from-white via-amber-100 to-yellow-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl"></div>

            <img
              src={assets.m_ghosh_co}
              alt="CA Moumita Ghosh"
              className="relative rounded-3xl shadow-2xl object-cover w-full max-w-md mx-auto"
            />
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-700 px-4 py-2 text-sm font-semibold">
              ABOUT M GHOSH & CO.
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Trusted Financial &
              <span className="block text-amber-500">Compliance Experts</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              M Ghosh & Co. is a professionally managed Chartered Accountancy
              firm committed to providing reliable Audit, Taxation, GST, Company
              Law, Financial Advisory and FCRA Compliance services with
              integrity, professionalism and practical business solutions.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Led by <strong>CA Moumita Ghosh</strong>,
              <strong> FCA, Company Secretary & FCRA Specialist</strong>, the
              firm delivers personalized financial and regulatory solutions for
              businesses, NGOs, startups and individuals, helping clients
              achieve sustainable growth while remaining fully compliant.
            </p>

            {/* Highlights */}

            <div className="grid grid-cols-2 gap-5 mt-10">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 hover:border-amber-400 hover:shadow-lg transition"
                >
                  <div className="bg-amber-100 text-amber-600 p-2 rounded-lg">
                    {item.icon}
                  </div>

                  <span className="font-medium text-slate-700">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center mt-10 bg-amber-500 hover:bg-amber-600 text-white px-7 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105"
            >
              Learn More
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
