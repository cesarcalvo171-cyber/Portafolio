import { FaWordpress } from "react-icons/fa";
import Registro      from "../assets/Registro_Egreso.png";
import Reporte_Kardex from "../assets/Reporte_Kardex.png";
import Proceso_Cheque from "../assets/Porceso_Cheque.png";
import step           from "../assets/step.png";
import Wordpress      from "../assets/Wordpress.png";
import jobitx         from "../assets/jobitx.png";
import sharm           from "../assets/sharm.png";
import Race         from "../assets/Race.png";
/* ─── Data ──────────────────────────────────────────────── */

const practiceProjects = [
  {
    title: "Sistema de Reporte de Egresos",
    description:
      "Plataforma para registrar y gestionar egresos, generar reportes financieros y mantener historial de transacciones. En uso activo.",
    image: Registro,
    technologies: ["React", "Formik", "Yup", "React Bootstrap"],
   
    
  },
  {
    title: "Reporte Kardex",
    description:
      "Gestión de reportes de productos de entrada y salida con registros detallados por movimiento de inventario.",
    image: Reporte_Kardex,
    technologies: ["React", "Formik", "Yup", "React Bootstrap"],
   
    
  },
  {
    title: "Sistema de Gestión de Cheques",
    description:
      "Registro de documentos para procesos de cheque clasificados según el tipo de trámite a realizar.",
    image: Proceso_Cheque,
    technologies: ["React", "Formik", "Yup", "React Bootstrap"],
    
   
  },
  {
    title: "Formulario Multi-Paso",
    description:
      "Rediseño de formulario con flujo guiado por pasos (step-by-step) para mejorar la experiencia del usuario.",
    image: step,
    technologies: ["React", "React Bootstrap"],
 
  },
];

const featuredProjects = [
  {
    title: "Landing Page — Jobitx",
    description:
      "Landing page corporativa moderna, responsiva con trancisiones suaves y con formulario de contacto integrado.",
    image: jobitx,
    technologies: ["React", "Tailwind CSS", "Formik", "Yup"],

  
  },
  {
    title: "Landing Page — Sharm 3000 platform ",
    description:
      "Landing page corporativa moderna, responsiva con trancisiones suaves y   con formulario de contacto integrado.",
    image: sharm,
    technologies: ["React", "Tailwind CSS", "Formik", "Yup"],
    
   
  },
   {
    title: "Race Gym ",
    description:
      "Site Web Personal , con diseño moderno y responsive contiene biblioteca de ejercicios, creacion de rutina y rutinas pre-definidas segun los dias de entrenamiento",
    image: Race,
    technologies: ["React", "Tailwind CSS", "Antigravity"],
  
  },
];

const wordpressProjects = [
  {
    title: "Sitio Web Branding Personal",
    description:
      "Desarrollo de sitio web Personal con WordPress, tema personalizado , plugins Personalizados y optimización SEO básica.",
    technologies: ["WordPress", "CSS", "Kadence Theme" ],
   
     image: Wordpress,
    
  },
  
];

/* ─── ProjectCard ───────────────────────────────────────── */

function ProjectCard({ project }) {
  const hasImage = !!project.image;

  return (
    <div
      className="glass-card rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
      style={{
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${project.statusColor}35`;
        e.currentTarget.style.boxShadow = `0 12px 40px ${project.statusColor}18`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* ── Image / placeholder ── */}
      {hasImage ? (
        <div className="relative overflow-hidden h-44">
          <div
            className="absolute inset-0 z-10 transition-opacity duration-400 group-hover:opacity-0"
            style={{
              background: "linear-gradient(to top, rgba(10,12,30,0.75) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute top-3 left-3 z-20 px-2.5 py-0.5 rounded-full text-[11px] font-mono"
            style={{
              background: `${project.statusColor}18`,
              border: `1px solid ${project.statusColor}50`,
              color: project.statusColor,
            }}
          >
            ● {project.status}
          </div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        /* WordPress / no-image placeholder */
        <div
          className="relative h-36 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${project.statusColor}18, rgba(10,12,30,0.9))`,
            borderBottom: `1px solid ${project.statusColor}25`,
          }}
        >
          <FaWordpress
            size={52}
            style={{ color: project.statusColor, opacity: 0.6 }}
            className="group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
          />
          <div
            className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-mono"
            style={{
              background: `${project.statusColor}18`,
              border: `1px solid ${project.statusColor}50`,
              color: project.statusColor,
            }}
          >
            ● {project.status}
             <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          />
          </div>
        </div>
      )}

      {/* ── Content ── */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-white font-bold text-base mb-2 leading-snug"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-mono rounded-lg transition-colors duration-200"
              style={{
                color: project.statusColor,
                background: `${project.statusColor}10`,
                border: `1px solid ${project.statusColor}28`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Section Header ────────────────────────────────────── */

function SectionHeader({ num, title, accentColor = "#06b6d4" }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-mono text-sm" style={{ color: accentColor }}>
        {num}
      </span>
      <h3
        className="text-white text-2xl md:text-3xl font-bold"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}
      </h3>
      <div
        className="h-px flex-1 max-w-xs"
        style={{
          background: `linear-gradient(to right, ${accentColor}60, transparent)`,
        }}
      />
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────── */

export function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6"
      style={{ background: "#07091a" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Main header ── */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-cyan-400 font-mono text-sm">03.</span>
          <h2
            className="text-white text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Proyectos
          </h2>
          <div
            className="h-px flex-1 max-w-xs"
            style={{
              background: "linear-gradient(to right, rgba(6,182,212,0.5), transparent)",
            }}
          />
        </div>

        {/* ══════════════════════════════════════════
            SECCIÓN 1 — Proyectos de Prácticas
        ══════════════════════════════════════════ */}
        <div className="mb-20">
          <SectionHeader
            num="03.1"
            title="Proyectos de Prácticas"
            accentColor="#06b6d4"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
            {practiceProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SECCIÓN 2 — Proyectos Destacados
        ══════════════════════════════════════════ */}
        <div className="mb-20">
          <SectionHeader
            num="03.2"
            title="Proyectos Destacados"
            accentColor="#8b5cf6"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SECCIÓN 3 — Proyectos WordPress
        ══════════════════════════════════════════ */}
        <div>
          <SectionHeader
            num="03.3"
            title="Proyectos WordPress"
            accentColor="#21759b"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {wordpressProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}