import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL = `https://wa.me/50558162673?text=${encodeURIComponent(
  "Hola, estoy interesado en tus servicios."
)}`;

export function Contacto() {
  return (
    <section
      id="Contacto"
      className="py-28 px-6"
      style={{ background: "#050816" }}
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* ── Section header ── */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-cyan-400 font-mono text-sm">04.</span>
          <h2
            className="text-white text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            ¿Hablamos?
          </h2>
        </div>

        <p className="text-slate-400 text-lg mb-14 max-w-xl mx-auto leading-relaxed">
          Estoy abierto a nuevas oportunidades, proyectos freelance y
          colaboraciones. ¡No dudes en escribirme!
        </p>

        {/* ── Contact card ── */}
        <div
          className="relative glass-card rounded-3xl p-10 md:p-14 overflow-hidden group"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Ambient glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 110%, rgba(6,182,212,0.09) 0%, transparent 65%)",
            }}
          />

          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10 relative">
            Mi bandeja de entrada siempre está abierta. Ya sea para una pregunta
            rápida, un proyecto nuevo o simplemente saludar — te responderé lo
            antes posible.
          </p>

          {/* ── Contact buttons ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            {/* Email button */}
            <a
              href="mailto:CesarCalvo171@gmail.com"
              className="group/btn flex items-center gap-3 px-7 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] w-full sm:w-auto justify-center"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                boxShadow: "0 0 20px rgba(6,182,212,0.2)",
              }}
            >
              <CgMail size={20} />
              CesarCalvo171@gmail.com
            </a>

            {/* WhatsApp button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
              style={{
                color: "#4ade80",
                border: "1px solid rgba(74,222,128,0.35)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(74,222,128,0.07)";
                e.currentTarget.style.borderColor = "rgba(74,222,128,0.6)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(74,222,128,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(74,222,128,0.35)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* ── Footer ── */}
        <p
          className="text-slate-700 text-sm mt-14 font-mono"
        >
          Diseñado &amp; Desarrollado por{" "}
          <span className="gradient-text">Cesar Calvo</span>
        </p>
      </div>
    </section>
  );
}
