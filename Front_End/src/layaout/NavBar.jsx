import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,    
} from "@/components/ui/breadcrumb"
import { LuGithub } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
export function NavBar() {
  return (
    <nav className="w-full bg-slate-950 py-6 border-b-2 border-green-400 shadow-sm"> 

      <div className="mx-auto flex justify-between">
        <div>
            <h1 className="text-3xl font-bold text-emerald-400 ml-6"> {"< DEV />"}</h1>
        </div>
        <Breadcrumb>
          <BreadcrumbList className="flex items-center gap-6 text-lg text-emerald-400">
            <BreadcrumbItem>
              <BreadcrumbLink
                href="#About"
                className="text-emerald-400 hover:text-emerald-200 transition-colors"
                
              >
                Sobre mí
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-green-600" />

            <BreadcrumbItem>
              <BreadcrumbLink
                href="#Herramientas"
                className="text-emerald-400 hover:text-emerald-200 transition-colors"
              >
                Herramientas
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-green-600" />

            <BreadcrumbItem>
              <BreadcrumbLink
                href="#projects"
                className="text-emerald-400 hover:text-emerald-200 transition-colors"
              >
                Proyectos
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-green-600" />

            <BreadcrumbItem>
              <BreadcrumbLink
                href="#Contacto"
                className="text-emerald-400 hover:text-emerald-200 transition-colors"
              >
                Contacto
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex gap-2">
       <LuGithub size={30} className="text-emerald-400 mr-6 hover:text-emerald-300 transition-colors cursor-pointer"/>
       <CgMail size={30} className="text-emerald-400 mr-6 hover:text-emerald-300 transition-colors cursor-pointer"/>
        </div>

      </div>
    </nav>
  );
}