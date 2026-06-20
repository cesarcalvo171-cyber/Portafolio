import { FaArrowDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const stats = [
  { value: "5+",    label: "Proyectos completados" },
  { value: "2+",    label: "Años en desarrollo" },
  { value: "React", label: "Stack principal" },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden"
      style={{ background: "#050816" }}
    >
      {/* ── Dot pattern ── */}
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

      {/* ── Ambient glow orbs ── */}
      <div
        className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative max-w-6xl mx-auto w-full">

        {/* Available badge */}
        <div className="flex items-center gap-2.5 mb-8 animate-fadeInUp">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{
                background: "#06b6d4",
                animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
              }}
            />
            <span
              className="relative inline-flex rounded-full h-2.5 w-2.5"
              style={{ background: "#06b6d4" }}
            />
          </span>
          <span
            className="text-slate-400 text-sm font-mono px-3 py-1 rounded-full border"
            style={{
              borderColor: "rgba(6,182,212,0.2)",
              background: "rgba(6,182,212,0.05)",
            }}
          >
            Disponible para nuevas oportunidades
          </span>
        </div>

        {/* Intro text */}
        <p
          className="font-mono text-xs mb-5 text-cyan-400 tracking-[0.25em] uppercase animate-fadeInUp delay-100"
        >
          Hola, mi nombre es
        </p>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-5 leading-[1.05] animate-fadeInUp delay-200"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="text-white">Cesar&nbsp;</span>
          <span className="gradient-text">Calvo.</span>
        </h1>

        {/* Role */}
        <h2
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-slate-500 mb-8 animate-fadeInUp delay-300"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Jr. Frontend Developer
        </h2>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 animate-fadeInUp delay-300">
          Desarrollador frontend egresado de Ingeniería en Sistemas. Apasionado
          por crear interfaces web claras, funcionales y visualmente atractivas.
          
          .
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-20 animate-fadeInUp delay-300">
          <a href="#projects">
            <button
              className="group flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] text-base"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                boxShadow: "0 0 20px rgba(6,182,212,0.25)",
              }}
            >
              Ver Proyectos
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </a>

          <a href="#Contacto">
            <button
              className="px-8 py-4 rounded-xl font-semibold text-cyan-400 border transition-all duration-300 hover:scale-105 text-base"
              style={{
                borderColor: "rgba(6,182,212,0.4)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(6,182,212,0.08)";
                e.currentTarget.style.borderColor = "rgba(6,182,212,0.8)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(6,182,212,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(6,182,212,0.4)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Contactar
            </button>
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 animate-fadeInUp delay-300">
          {stats.map((stat, i) => (
            <div key={stat.label}>
              {i > 0 && (
                <div
                  className="hidden sm:block absolute -ml-5 h-10 w-px"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
              )}
              <div
                className="text-3xl font-bold gradient-text"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#About"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-cyan-400 transition-colors duration-300 animate-bounce"
      >
        <FaArrowDown size={20} />
      </a>
    </section>
  );
}
