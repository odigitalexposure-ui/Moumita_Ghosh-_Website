import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
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
    // { name: "Industries", path: "/industries" },
    // { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-white/30 shadow-xl py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-6 xl:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`transition-all duration-300 lg:-ml-10 xl:-ml-16 ${
              scrolled ? "scale-95" : "scale-100"
            }`}
          >
            <img
              src={assets.m_logo1}
              className="w-24 xl:w-28 rounded-2xl shadow-2xl"
              alt="Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            className={`hidden lg:flex items-center ml-auto gap-14 xl:gap-16 rounded-full px-6 py-3 transition-all duration-500 ${
              !scrolled ? "bg-black/15 backdrop-blur-md" : ""
            }`}
          >
            <div className="flex items-center gap-10 xl:gap-16">
              {links.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative font-semibold tracking-wide transition-all duration-300 ${
                      isActive
                        ? scrolled
                          ? "text-yellow-500"
                          : "text-yellow-300 drop-shadow-[0_2px_10px_rgba(255,215,0,0.8)]"
                        : scrolled
                          ? "text-slate-900 hover:text-yellow-500"
                          : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] hover:text-yellow-300"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <Link
              to="/contact"
              className="rounded-full bg-yellow-500 px-7 py-3 font-semibold text-black shadow-[0_8px_25px_rgba(255,193,7,0.45)] transition-all duration-300 hover:bg-yellow-500 hover:shadow-[0_12px_35px_rgba(255,193,7,0.6)] hover:scale-105"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden rounded-xl p-2 transition-all duration-300 ${
              scrolled
                ? "bg-white/80 text-black shadow-lg"
                : "bg-white/10 backdrop-blur-md text-white"
            }`}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {/* Mobile Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 lg:hidden z-40 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed top-20 left-4 right-4 z-50 lg:hidden transition-all duration-500 ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden rounded-3xl bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/30">
            <div className="py-3">
              {links.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `mx-3 my-1 flex items-center rounded-xl px-5 py-4 font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-yellow-500 text-black shadow-lg"
                        : "text-slate-700 hover:bg-yellow-50 hover:translate-x-2"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="border-t border-gray-200 p-5">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full bg-yellow-500 py-4 text-center font-semibold text-black transition hover:scale-[1.02] hover:bg-yellow-400"
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
