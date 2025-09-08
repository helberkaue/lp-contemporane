import Image from "next/image"
import { FaCircle } from "react-icons/fa";  

export default function SectionOne() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-screen">
      <Image
        src="/images-bg/Dobra 2 - BG.png"
        fill
        priority
        alt="Background"
        className="-z-10 object-cover"
        sizes="100vw"
      />

      <div className="relative flex flex-col items-center text-center justify-center text-white px-6 sm:px-12 md:px-24 lg:px-48 xl:px-64 py-16 sm:py-20 md:py-24 gap-12">
        
        <div className="rounded-lg w-24 sm:w-32 md:w-96 h-2 bg-blue-400"></div>
        
        <p className="max-w-5xl text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-snug">
          <strong>O Parque dentro do Parque</strong> com a melhor estrutura para comportar a sua empresa
        </p>

        <div className="border backdrop-blur-sm rounded-2xl sm:rounded-3xl px-6 sm:px-8 md:px-12 py-6 sm:py-8 flex flex-col gap-3 text-base sm:text-lg md:text-2xl lg:text-4xl text-left max-w-6xl">
          <p className="flex items-center gap-2">
            <FaCircle size={20} className="text-blue-400 shrink-0" /> Próximo ao maior hospital Unimed do estado
          </p>
          <p className="flex items-center gap-2">
            <FaCircle size={20} className="text-blue-400 shrink-0" /> Salas comerciais a partir de 39m²
          </p>
          <p className="flex items-center gap-2">
            <FaCircle size={20} className="text-blue-400 shrink-0" /> Acesso direto ao Parque Shopping - Elevador
          </p>
          <p className="flex items-center gap-2">
            <FaCircle size={20} className="text-blue-400 shrink-0" /> Salas comerciais para todo porte de empresa
          </p>
          <p className="flex font-bold items-center gap-2">
            <FaCircle size={20} className="text-blue-400 shrink-0" /> Entrega 2028
          </p>
        </div>
      </div>
    </section>
  )
}
