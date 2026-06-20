import { useState } from "react";
import { FaReact, FaBootstrap, FaGithub, FaHtml5, FaCss3Alt, FaWordpress, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { SiVite, SiSupabase } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

/* Text-based icon badge for tools without an SVG logo */
const TextBadge = ({ text, color }) => (
  <span
    style={{
      color,
      fontWeight: 700,
      fontSize: "13px",
      fontFamily: "'Space Grotesk', sans-serif",
      letterSpacing: "0.03em",
    }}
  >
    {text}
  </span>
);

const categories = [
  {
    name: "Frontend",
    skills: [
      { name: "React",          level: 90 },
      { name: "JavaScript",     level: 70 },
      { name: "HTML / CSS",     level: 90 },
      { name: "Tailwind CSS",   level: 80 },
      { name: "Bootstrap",      level: 90 },
      { name: "React Bootstrap",level: 90 },
      { name: "Shadcn/ui",      level: 50 },
    ],
  },
  {
    name: "Herramientas",
    skills: [
      { name: "GitHub",     level: 70 },
      { name: "VS Code",    level: 90 },
      { name: "Figma",      level: 50 },
      { name: "npm/yarn",   level: 70 },
      { name: "Vite",       level: 70 },
      { name: "Formik",     level: 70 },
      { name: "Yup",        level: 70 },
      { name: "WordPress",   level: 75 },
      { name: "Antigravity", level: 75 },
      { name: "n8n",         level: 50},
      { name: "Docker",      level: 50 },
      { name: "Supabase",    level:50 },
    ],
  },
];

const techIcons = [
  { name: "React",      icon: <FaReact />,          color: "#61dafb" },
  { name: "JavaScript", icon: <IoLogoJavascript />,  color: "#f7df1e" },
  { name: "HTML5",      icon: <FaHtml5 />,           color: "#e34c26" },
  { name: "CSS3",       icon: <FaCss3Alt />,          color: "#264de4" },
  { name: "Tailwind",   icon: <RiTailwindCssFill />,  color: "#38bdf8" },
  { name: "Bootstrap",  icon: <FaBootstrap />,        color: "#7952b3" },
  { name: "Vite",       icon: <SiVite />,             color: "#646cff" },
  { name: "GitHub",     icon: <FaGithub />,           color: "#e2e8f0" },
  { name: "Figma",      icon: <IoLogoFigma />,        color: "#f24e1e" },
  { name: "WordPress",   icon: <FaWordpress />,                                   color: "#21759b" },
  { name: "VS Code",     icon: <VscVscode />,                                     color: "#007acc" },
  { name: "Docker",      icon: <FaDocker />,                                      color: "#2496ed" },
  { name: "n8n",         icon: <TextBadge text="n8n" color="#ea4b71" />,          color: "#ea4b71" },
  { name: "Antigravity", icon: <TextBadge text="AG"  color="#8b5cf6" />,          color: "#8b5cf6" },
  { name: "Supabase",    icon: <SiSupabase />,                                    color: "#3ecf8e" },
];


export function Tool() {
  const [selected, setSelected] = useState(0);

  return (
    <section
      id="Herramientas"
      className="py-28 px-6"
      style={{ background: "#050816" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-cyan-400 font-mono text-sm">02.</span>
          <h2
            className="text-white text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Habilidades
          </h2>
          <div
            className="h-px flex-1 max-w-xs"
            style={{
              background:
                "linear-gradient(to right, rgba(6,182,212,0.5), transparent)",
            }}
          />
        </div>

        {/* ── Tabs + bars ── */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {/* Category tabs */}
          <div className="flex md:flex-col gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setSelected(i)}
                className="px-5 py-3 text-left text-sm font-medium rounded-xl transition-all duration-300 border w-full"
                style={
                  selected === i
                    ? {
                        color: "#06b6d4",
                        background: "rgba(6,182,212,0.08)",
                        borderColor: "rgba(6,182,212,0.4)",
                        boxShadow: "0 0 18px rgba(6,182,212,0.12)",
                      }
                    : {
                        color: "#64748b",
                        background: "transparent",
                        borderColor: "rgba(255,255,255,0.06)",
                      }
                }
                onMouseEnter={(e) => {
                  if (selected !== i) {
                    e.currentTarget.style.color = "#e2e8f0";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selected !== i) {
                    e.currentTarget.style.color = "#64748b";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Skill bars */}
          <div
            className="md:col-span-3 rounded-2xl p-8 glass-card"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {categories[selected].skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-200 font-medium text-sm">
                      {skill.name}
                    </span>
                    <span className="text-cyan-400 font-mono text-xs">
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${skill.level}%`,
                        background:
                          "linear-gradient(90deg, #06b6d4 0%, #8b5cf6 100%)",
                        boxShadow: "0 0 8px rgba(6,182,212,0.4)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tech icon grid ── */}
        <div>
          <p className="text-slate-600 text-xs font-mono uppercase tracking-widest mb-8 text-center">
            Stack tecnológico
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-3">
            {techIcons.map((tech) => (
              <div
                key={tech.name}
                className="glass-card flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl transition-all duration-300 group cursor-default"
                style={{ border: "1px solid rgba(255,255,255,0.05)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${tech.color}40`;
                  e.currentTarget.style.background = `${tech.color}08`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.background = "";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span
                  className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300"
                  style={{
                    color: tech.color,
                    filter: `drop-shadow(0 0 6px ${tech.color}60)`,
                  }}
                >
                  {tech.icon}
                </span>
                <span className="text-slate-500 text-[10px] text-center group-hover:text-slate-200 transition-colors leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
