import { FaWhatsapp } from "react-icons/fa";
function WhatsAppLink() {
  const numero = '50558162673'; // Código de país + número (sin + ni espacios)
  const mensaje = 'Hola, estoy interesado en tus servicios.'; 

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-emerald-400 flex items-center gap-1 sm:gap-2 hover:text-emerald-100 transition-colors text-sm sm:text-base lg:text-lg">
     <FaWhatsapp  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-12 lg:h-12" />   Hablar por WhatsApp
    </a>
  );
}

export default WhatsAppLink;