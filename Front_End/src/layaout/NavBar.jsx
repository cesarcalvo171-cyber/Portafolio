import { useState, useEffect } from "react";
import { CgMail } from "react-icons/cg";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import WhatsAppLink from "../components/WhatsappLink";

const navLinks = [
  { href: "#About",        label: "Sobre mí",    num: "01" },
  { href: "#Herramientas", label: "Habilidades",  num: "02" },
  { href: "#projects",     label: "Proyectos",    num: "03" },
  { href: "#Contacto",     label: "Contacto",     num: "04" },
];

export function NavBar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card border-b border-white/8 shadow-xl shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* ── Logo ── */}
        <a
          href="#"
          className="text-xl font-bold gradient-text"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          &lt; DEV /&gt;
        </a>

        {/* ── Desktop links ── */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-slate-400 hover:text-white transition-colors duration-300 text-sm font-medium group"
            >
              <span className="text-cyan-400 font-mono text-xs mr-1">{link.num}.</span>
              {link.label}
              {/* animated underline */}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* ── Icons + hamburger ── */}
        <div className="flex items-center gap-4">
          <WhatsAppLink />
          <a href="mailto:cesarcalvo171@gmail.com" title="Enviar correo">
            <CgMail
              size={22}
              className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            />
          </a>

          <button
            className="lg:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setOpen((p) => !p)}
            aria-label="Abrir menú"
          >
            {open ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="lg:hidden glass-card border-t border-white/8 px-6 py-5 mt-1">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors py-3 border-b border-white/5 last:border-0"
              >
                <span className="text-cyan-400 font-mono text-xs w-6">{link.num}.</span>
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}