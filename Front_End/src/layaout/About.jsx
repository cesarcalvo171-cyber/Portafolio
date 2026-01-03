import perfil from "../assets/perfil.jpeg";

export function About() {
  return (
    <>
      <section id="About" className="py-20 px-6 bg bg-slate-950 ">
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
          <span className="text-emerald-400 font-mono">01.</span>
          <h2 className=" text-white text-2xl md:text-3xl font-bold ">Sobre mí</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
             Soy egresado de la carrera de Ingeniería en Sistemas con énfasis en frontend y me apasiona transformar ideas en experiencias web claras y usables.
              Disfruto trabajar con HTML, CSS y JavaScript,React, Tailwinds, Bootstrap cuidando tanto los detalles visuales como la forma en que las personas interactúan con cada interfaz.</p>
             
              <p className="text-muted-foreground leading-relaxed">
               Actualmente estoy realizando mis prácticas profesionales en la Universidad Padre Gaspar García Laviana, dentro del área de sistemas financieros. 
               Esta experiencia me ha permitido enfrentar problemas reales, aprender a trabajar en equipo y entender cómo la tecnología puede mejorar procesos internos. 
               Me considero una persona curiosa, responsable y en constante aprendizaje, con la meta de seguir creciendo como desarrollador frontend.


              </p>
            </div>

            <div className="relative group">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                <div className="relative w-full h-full bg-gray-600rounded-lg overflow-hidden">
                  <img
                    src={perfil} 
                    alt="Tu foto de perfil"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}