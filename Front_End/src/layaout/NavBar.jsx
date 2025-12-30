"use client";

import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LuGithub } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-950 py-4 border-b-2 border-green-400 shadow-sm sm:px-6 lg:px-8 fixed top-0 z-50">
      {/* BARRA SUPERIOR */}
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold text-emerald-400 ml-4 sm:ml-6">
          {"< DEV />"}
        </h1>

        {/* MENU DESKTOP */}
        <Breadcrumb className="hidden lg:block">
          <BreadcrumbList className="flex items-center gap-6 text-lg text-emerald-400">
            <BreadcrumbItem>
              <BreadcrumbLink
                href="#About"
                className="text-emerald-400 hover:text-emerald-100 transition-colors"
              >
                Sobre mí
              </BreadcrumbLink>
            </BreadcrumbItem>
              <BreadcrumbSeparator className="text-green-600" />

            <BreadcrumbItem>
              <BreadcrumbLink
                href="#Herramientas"
                className="text-emerald-400 hover:text-emerald-100 transition-colors"
              >
                Herramientas
              </BreadcrumbLink>
            </BreadcrumbItem>
              <BreadcrumbSeparator className="text-green-600" />

            <BreadcrumbItem>
              <BreadcrumbLink
                href="#projects"
                className="text-emerald-400 hover:text-emerald-100 transition-colors"
              >
                Proyectos
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-green-600" />

            <BreadcrumbItem>
              <BreadcrumbLink
                href="#Contacto"
                className="text-emerald-400 hover:text-emerald-100 transition-colors"
              >
                Contacto
              </BreadcrumbLink>
            </BreadcrumbItem>
              <BreadcrumbSeparator className="text-green-600" />
          </BreadcrumbList>
        </Breadcrumb>

        {/* ICONOS + HAMBURGUESA */}
        <div className="flex items-center gap-3 mr-4 sm:mr-6">
          <LuGithub
            size={24}
            className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
          />
          <CgMail
            size={24}
            className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
          />

          {/* Botón hamburguesa: solo en móvil/tablet */}
          <button
            className="lg:hidden text-emerald-400 hover:text-emerald-200 transition-colors"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            {open ? <RxCross2 size={26} /> : <RxHamburgerMenu size={26} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE: */}
      {open && (
        <div className="lg:hidden  px-4 pb-4">
          <Breadcrumb>
            <BreadcrumbList className="flex flex-col gap-3 text-base text-emerald-400">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#About"
                  className="block w-full py-1 hover:text-emerald-100 transition-colors "
                  onClick={() => setOpen(false)}
                >
                  Sobre mí
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#Herramientas"
                  className="block w-full py-1 hover:text-emerald-100 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Herramientas
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#projects"
                  className="block w-full py-1 hover:text-emerald-100 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Proyectos
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#Contacto"
                  className="block w-full py-1 hover:text-emerald-100 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Contacto
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      )}
    </nav>
  );
}