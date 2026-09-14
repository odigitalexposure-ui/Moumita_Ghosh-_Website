import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, X, MessageCircle, ChevronRight, Phone } from "lucide-react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  // Phone and WhatsApp details
  const whatsappNumber = "9831996673";
  const whatsappDisplay = "+91 98319 96673";
  const callNumber = "8240784998";
  const callDisplay = "+91 82407 84998";
  const whatsappMessage = encodeURIComponent(
    "Hello M Ghosh & Co, I would like to inquire about your professional services."
  );
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${whatsappMessage}`;

  // Handle hover on desktop
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 180);
  };

  // Close on outside click (especially on mobile/tablet)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none"
      aria-label="Floating Contact Options"
    >
      {/* Pop-up Options on Hover / Open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="mb-3 flex flex-col gap-2.5 items-end origin-bottom-right"
          >
            {/* Header Badge */}
            <div className="flex items-center gap-2 rounded-full bg-slate-950/90 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md border border-white/15">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-medium tracking-wide text-slate-200">
                Direct Consultation • M Ghosh &amp; Co
              </span>
            </div>

            {/* WhatsApp Option Card */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ delay: 0.03, duration: 0.2 }}
              className="group/wa flex items-center gap-3.5 rounded-2xl bg-white/95 p-3 pr-5 text-slate-900 shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur-xl border border-emerald-100 transition-all duration-300 hover:scale-[1.03] hover:border-emerald-400 hover:shadow-[0_14px_35px_rgba(37,211,102,0.35)]"
              title="Chat on WhatsApp"
            >
              {/* WhatsApp Icon Box */}
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-[#25D366] text-white shadow-md shadow-emerald-500/30 transition-transform duration-300 group-hover/wa:scale-110">
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>

              {/* Text Info */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-600">
                    WhatsApp
                  </span>
                  <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                    Instant Chat
                  </span>
                </div>
                <span className="font-mono text-sm font-extrabold text-slate-800 tracking-tight">
                  {whatsappDisplay}
                </span>
              </div>

              <ChevronRight
                size={16}
                className="ml-1 text-slate-300 transition-transform duration-300 group-hover/wa:translate-x-1 group-hover/wa:text-emerald-500"
              />
            </motion.a>

            {/* Direct Calling Option Card */}
            <motion.a
              href={`tel:${callNumber}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ delay: 0.08, duration: 0.2 }}
              className="group/call flex items-center gap-3.5 rounded-2xl bg-white/95 p-3 pr-5 text-slate-900 shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur-xl border border-amber-100 transition-all duration-300 hover:scale-[1.03] hover:border-amber-400 hover:shadow-[0_14px_35px_rgba(245,158,11,0.35)]"
              title="Call Directly"
            >
              {/* Call Icon Box */}
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 shadow-md shadow-amber-500/30 transition-transform duration-300 group-hover/call:scale-110">
                <PhoneCall size={20} className="stroke-[2.5]" />
              </div>

              {/* Text Info */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-600">
                    Call Now
                  </span>
                  <span className="rounded-md bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold text-amber-800 border border-amber-200">
                    Speak to CA
                  </span>
                </div>
                <span className="font-mono text-sm font-extrabold text-slate-800 tracking-tight">
                  {callDisplay}
                </span>
              </div>

              <ChevronRight
                size={16}
                className="ml-1 text-slate-300 transition-transform duration-300 group-hover/call:translate-x-1 group-hover/call:text-amber-500"
              />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <div className="relative flex items-center">
        {/* Helper Pill on Desktop when closed */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            className="hidden sm:flex mr-3 items-center gap-1.5 rounded-full bg-slate-950/85 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md border border-white/10 pointer-events-none"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>Call or WhatsApp</span>
          </motion.div>
        )}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={
            isOpen
              ? "Close contact options"
              : "Open contact options for WhatsApp and Calling"
          }
          aria-expanded={isOpen}
          className={`relative flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-400/40 ${
            isOpen
              ? "bg-slate-900 text-white rotate-90 border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.5)]"
              : "bg-gradient-to-tr from-slate-950 via-slate-900 to-[#12345B] text-amber-400 border-2 border-amber-400/70 hover:border-amber-300 hover:shadow-[0_12px_40px_rgba(245,158,11,0.4)]"
          }`}
        >
          {/* Subtle Radar Pulse Ring Behind Trigger when closed */}
          {!isOpen && (
            <span className="absolute -inset-1 -z-10 rounded-full bg-amber-400/25 animate-ping duration-1000 pointer-events-none" />
          )}

          {isOpen ? (
            <X size={26} className="text-amber-400 stroke-[2.5]" />
          ) : (
            <div className="relative flex items-center justify-center">
              {/* Call Icon */}
              <Phone
                size={24}
                className="text-amber-400 stroke-[2.4] transition-transform duration-300 group-hover:scale-110"
              />

              {/* Small WhatsApp badge on bottom-right of button */}
              <span className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm border-2 border-slate-950">
                <svg
                  className="h-3.5 w-3.5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default FloatingContact;
