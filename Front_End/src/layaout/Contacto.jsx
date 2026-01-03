import WhatsAppLink from "../components/WhatsappLink";


export function Contacto() {
  return (
    <>
      <section id="Contacto" className="py-20 px-6  bg-slate-800 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-emerald-400 font-mono">04.</span>
            <h2 className=" text-white text-2xl md:text-3xl font-bold ">
              Contacto
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4 mt-3">
              <p className="text-muted-foreground leading-relaxed text-white">
                ¿Quieres ponerte en contacto conmigo? ¡Genial! Estoy siempre
                abierto a nuevas oportunidades y colaboraciones. Puedes enviarme
                un correo electrónico a{" "}
                <span className="text-emerald-400">
                  CesarCalvo171@gmail.com
                </span>
              </p>
             
               
             
            </div>
            <div className=" grid md:grid-cols-1 gap-2 mt-5">
               <WhatsAppLink className="h-10"/> <p className=" text-emerald-400 hover:text-emerald-100">  Hablar por WhatsApp </p> 

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
