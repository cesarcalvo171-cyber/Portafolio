import {Button} from "../components/ui/button.jsx";
import { FaArrowCircleDown } from "react-icons/fa";
export function Hero() {
  return (
    <>
      <section className=" bg-slate-950 min-h-screen flex flex-col justify-center px-6 pt-20">
        {" "}
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-3xl">
            <p className=" font-mono text-sm mb-4 text-emerald-400">
              Hola, mi nombre es 
            </p>
            <h1 className=" text-white text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              Cesar Mauricio Calvo Diaz
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6">
             Jr. Frontend Developer
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla inventore repellendus corrupti dolores, 
              ex vero illo qui, culpa recusandae distinctio architecto debitis excepturi ad quos consectetur quidem veniam molestiae!
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                <a href="#projects">Ver Proyectos</a>
              </Button>
              <Button asChild size="lg" variant="outline"
              className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white">
              <a href="#Contacto">Contactar</a>
              </Button>
            </div>
          </div>
          <a href="#About"
          className="absolute bottom-10 left-1/2 -translate-x-1/2
          text-muted-foreground hover:text-emerald-400
          transition-colors animate-bounce">

            <FaArrowCircleDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-12 lg:h-12" />
          </a>
        </div>
      </section>
    </>
  );
}
