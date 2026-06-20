import perfil from "../assets/perfil.jpeg";

const skills = [
  "React", "JavaScript", "HTML & CSS", "Tailwind CSS",
  "Bootstrap", "Formik", "Yup", "Vite", "REST APIs", "Git",
];

const experience = [
   {
    period: "presente",
    role: "Desarrolador Frontend ",
    place: "Trabajos freelance y proyectos personales",
  },
  {
    period: "2024 – 2025",
    role: "Practicante de Desarrollo Frontend",
    place: "Univ. Padre Gaspar García Laviana",
  },
  {
    period: "2021 – 2024",
    role: "Ingeniería en Sistemas (Egresado)",
    place: "Formación académica",
  },
];

export function About() {
  return (
    <section
      id="About"
      className="py-28 px-6"
      style={{ background: "#07091a" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-cyan-400 font-mono text-sm">01.</span>
          <h2
            className="text-white text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Sobre mí
          </h2>
          <div
            className="h-px flex-1 max-w-xs"
            style={{
              background: "linear-gradient(to right, rgba(6,182,212,0.5), transparent)",
            }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ── Text column ── */}
          <div className="space-y-8">
            <p className="text-slate-300 leading-relaxed text-lg">
              Soy egresado de{" "}
              <span className="text-cyan-400 font-medium">
                Ingeniería en Sistemas
              </span>{" "}
              con énfasis en desarrollo frontend. Me apasiona transformar ideas
              en experiencias web claras, funcionales y visualmente atractivas.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Disfruto trabajar con HTML, CSS, JavaScript y React, cuidando
              tanto los detalles visuales como la experiencia del usuario.
              Actualmente realizo mis prácticas profesionales en la Universidad
              Padre Gaspar García Laviana, donde enfrento problemas reales y
              contribuyo al desarrollo de herramientas para la gestión
              financiera.
            </p>

            {/* Experience mini-timeline */}
            <div>
              <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">
                Experiencia
              </p>
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div
                    key={exp.role}
                    className="flex gap-4 p-4 rounded-xl border transition-colors duration-300 hover:border-cyan-400/25"
                    style={{
                      background: "rgba(6,182,212,0.04)",
                      borderColor: "rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className="w-1 rounded-full flex-shrink-0 mt-1"
                      style={{
                        background: "linear-gradient(180deg, #06b6d4, #8b5cf6)",
                        minHeight: "40px",
                      }}
                    />
                    <div>
                      <p className="text-cyan-400 font-mono text-xs mb-0.5">
                        {exp.period}
                      </p>
                      <p className="text-white font-semibold text-sm">{exp.role}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{exp.place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill tags */}
            <div>
              <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">
                Tecnologías
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-cyan-400 font-mono rounded-lg border transition-all duration-200 cursor-default hover:bg-cyan-400/8"
                    style={{ borderColor: "rgba(6,182,212,0.2)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Photo column ── */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              {/* Glow backdrop */}
              <div
                className="absolute inset-0 rounded-2xl opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                }}
              />

              {/* Photo frame */}
              <div
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden gradient-border"
              >
                <img
                  src={perfil}
                  alt="Cesar Calvo — Frontend Developer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
                {/* Bottom overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,8,22,0.7) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 glass-card rounded-xl px-4 py-2.5 shadow-xl"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <span className="text-white text-sm font-semibold block">
                  Frontend Dev
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "#06b6d4",
                      boxShadow: "0 0 6px #06b6d4",
                      animation: "pulseGlow 2.2s ease-in-out infinite",
                    }}
                  />
                  <span className="text-cyan-400 text-xs">Disponible</span>
                </div>
              </div>

              {/* Decorative corner dot */}
              <div
                className="absolute -top-3 -left-3 w-6 h-6 rounded-full border-2"
                style={{ borderColor: "#8b5cf6", background: "#050816" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}