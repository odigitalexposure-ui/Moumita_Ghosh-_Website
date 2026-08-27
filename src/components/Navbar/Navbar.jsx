import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-md py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-6 xl:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`transition-all duration-300 ${
              scrolled ? "scale-95" : "scale-100"
            }`}
          >
            <img
              src={assets.m_logo1}
              className="w-20 sm:w-24 xl:w-28 rounded-2xl shadow-xl border border-white/40"
              alt="M Ghosh & Co Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            className={`hidden lg:flex items-center ml-auto gap-8 xl:gap-12 rounded-full px-6 py-2.5 transition-all duration-500 ${
              !scrolled ? "bg-black/25 backdrop-blur-md border border-white/15" : ""
            }`}
          >
            <nav className="flex items-center gap-7 xl:gap-9">
              {links.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-bold tracking-wide transition-all duration-300 ${
                      isActive
                        ? scrolled
                          ? "text-amber-600"
                          : "text-amber-300 drop-shadow-[0_2px_10px_rgba(245,158,11,0.8)]"
                        : scrolled
                          ? "text-slate-800 hover:text-amber-600"
                          : "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] hover:text-amber-300"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Quick Phone Call Pill on Desktop */}
            <div
              className={`hidden xl:flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full transition ${
                scrolled
                  ? "bg-slate-100 text-[#12345B]"
                  : "bg-white/15 text-white backdrop-blur-md"
              }`}
            >
              <Phone size={13} className="text-amber-400" />
              <a
                href="tel:8240784998"
                className="hover:text-amber-400 transition"
                title="Call 8240784998"
              >
                8240784998
              </a>
              <span className="opacity-40">|</span>
              <a
                href="tel:9831996673"
                className="hover:text-amber-400 transition"
                title="Call 9831996673"
              >
                9831996673
              </a>
            </div>

            {/* Book Consultation CTA */}
            <Link
              to="/contact"
              className="rounded-full bg-amber-400 px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_4px_20px_rgba(245,158,11,0.35)] transition-all duration-300 hover:bg-amber-500 hover:scale-105 hover:shadow-[0_6px_25px_rgba(245,158,11,0.5)]"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className={`lg:hidden rounded-xl p-2.5 transition-all duration-300 ${
              scrolled
                ? "bg-slate-300 text-slate-900 shadow-sm"
                : "bg-slate-300 text-slate-900 shadow-sm"
            }`}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 bg-black/50 backdrop-blur-xs transition-all duration-300 lg:hidden z-40 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />

        {/* Mobile Menu Dropdown */}
        <div
          className={`fixed top-20 left-4 right-4 z-50 lg:hidden transition-all duration-500 ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden rounded-3xl bg-white/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-slate-100 p-5">
            {/* Mobile Dropdown Header with Cross Button */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <img
                  src={assets.m_logo1}
                  alt="M Ghosh & Co"
                  className="h-12 w-18 rounded-lg object-cover shadow-xs"
                />
                <span className="text-sm font-black text-red-700 tracking-tight">
                  M Ghosh & Co.
                  <br />
                  Chattered Accountants
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-amber-400 hover:text-slate-950 transition-colors shadow-xs"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-1">
              {links.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center rounded-xl px-5 py-3.5 text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-amber-400 text-slate-950 shadow-sm"
                        : "text-slate-700 hover:bg-amber-50 hover:translate-x-1"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Dual Phone Numbers */}
            <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 px-2">
                Call Us Directly
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:8240784998"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-50 border border-slate-200 py-2.5 text-xs font-bold text-slate-800 hover:bg-amber-50"
                >
                  <Phone size={13} className="text-amber-500" />
                  8240784998
                </a>
                <a
                  href="tel:9831996673"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-50 border border-slate-200 py-2.5 text-xs font-bold text-slate-800 hover:bg-amber-50"
                >
                  <Phone size={13} className="text-amber-500" />
                  9831996673
                </a>
              </div>

              {/* WhatsApp Mobile */}
              <a
                href="https://wa.me/919831996673"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500/10 text-emerald-700 border border-emerald-200 py-2.5 text-xs font-bold transition hover:bg-emerald-500 hover:text-white"
              >
                <MessageCircle size={15} />
                WhatsApp Consultation
              </a>
            </div>

            {/* Mobile Consultation CTA */}
            <div className="mt-3">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl bg-amber-400 py-3.5 text-center text-xs font-black uppercase tracking-wider text-slate-950 shadow-md transition hover:bg-amber-500"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
