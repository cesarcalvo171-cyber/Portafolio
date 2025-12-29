// src/components/Projects.jsx
import React from "react"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { LuGithub } from "react-icons/lu";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


// Si NO tienes estos componentes, reemplázalos o créalos.
// Por ahora asumo que existen en src/components/ui
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import Registro from "../assets/Registro_Egreso.png"
import Reporte_Kardex from "../assets/Reporte_Kardex.png"
import Proceso_Cheque from "../assets/Porceso_Cheque.png"

const projects = [
  {
    title: "Sistema de Reporte de Egresos",
    description:
      "-Plataforma para Area Contable de la Universidad Nacional Padre Gaspar Garcia Laviana - Permite registrar y gestionar egresos, generar reportes financieros y mantener un historial detallado de transacciones.-",
    image:Registro,
    technologies: ["React", "yup", "React Bootstrap", " Formik"],
   
    featured: true,
  },
  {
    title: "Reporte Kardex",
    description: 
      "Plataforma para Area Contable de la Universidad Nacional Padre Gaspar Garcia Laviana- Permite Tener Reportes de Producto de Entrada y de Salida, el cual permite tener un registro Segun el Movimiento.",
    image: Reporte_Kardex,
    technologies: ["React", "yup", "React Bootstrap", " Formik"],
  
    featured: true,
  },
  {
     title: "Sistema de Gestion de Cheque ",
    description: 
      "Plataforma para Area Contable de la Universidad Nacional Padre Gaspar Garcia Laviana- Permite Registrar los Documentos Necesarios Para los Procesos  de Cheque que se Realizan en lal Institucion.",
    image: Proceso_Cheque,
    technologies: ["React", "yup", "React Bootstrap", " Formik"],
  
    featured: true,
   
  },
  
]

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
 

  return (
    <section id="projects" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-white font-mono">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Proyectos Destacados</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={` text-white grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right " : ""
              }`}
            >
              <div
                className={`md:col-span-7 relative group ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-white/30 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className= "w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              <div
                className={`md:col-span-5 ${
                  index % 2 === 1 ? "md:order-1 md:pr-4" : "md:pl-4"
                }`}
              >
                <p className="text-emerald-400 font-mono text-sm mb-2">Proyecto Destacado</p>
                <h3 className=" text-white text-xl md:text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="bg-slate-800 p-6 rounded-lg shadow-lg mb-4">
                  <p className="text-white text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div
                  className={`flex flex-wrap gap-2 mb-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className=" text-white  font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>

        

      

      
      </div>
    </section>
  )
}