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
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci 
               quisquam voluptatibus fugit magni sequi corrupti, distinctio id, dolore 
               officiis molestias eos aperiam modi, quae quos animi totam. Omnis, tenetur numquam?
              </p>
              <p className="text-muted-foreground leading-relaxed">
                  officiis molestias eos aperiam modi, quae quos animi totam. Omnis, tenetur numquam?{" "}
                <span className="text-emerald-400"> quos animi totam. Omnis, tenetur numquam?</span>,   officiis molestias eos aperiam modi, quae quos animi totam. Omnis, tenetur numquam?
                 officiis molestias eos aperiam modi, quae quos animi totam. Omnis, tenetur numquam?e.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                 officiis molestias eos aperiam modi, quae quos animi totam. Omnis, tenetur numquam?
                   officiis molestias eos aperiam modi, quae quos animi totam. Omnis, tenetur numquam?
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