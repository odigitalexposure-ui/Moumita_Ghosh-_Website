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
        scrolled ? "bg-white shadow-xl py-2" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`font-bold transition-all duration-300 ${
              scrolled ? "text-2xl text-slate-900" : "text-3xl text-white"
            }`}
          >
            {/* M Ghosh & Co. */}
            <img className=" w-15 rounded-md" src={assets.m_logo} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition duration-300 ${
                    isActive
                      ? "text-yellow-500"
                      : scrolled
                        ? "text-slate-700 hover:text-yellow-500"
                        : "text-white hover:text-yellow-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Icon */}
          <button
            className={`lg:hidden ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            menuOpen ? "max-h-[500px] mt-5" : "max-h-0"
          }`}
        >
          <div className="rounded-2xl bg-white shadow-2xl">
            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-4 border-b transition ${
                    isActive
                      ? "text-yellow-500 bg-yellow-50"
                      : "text-slate-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="p-5">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-yellow-500 hover:bg-yellow-600 text-black rounded-full py-3 font-semibold"
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
