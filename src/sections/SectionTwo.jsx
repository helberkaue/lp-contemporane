import Image from "next/image";
import CarrousselOne from "@/components/CarrousselOne";
import CarrousselTwo from "@/components/CarrousselTwo";


export default function SectionTwo() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-screen">
      <Image
        src={"/images-bg/Dobra 3 BG.png"}
        fill
        priority
        alt="Background"
        className="-z-10 object-cover"
        sizes="100vw"
      />
      <div className="flex text-white flex-col p-8 sm:p-12 md:p-24 gap-2 items-center text-center justify-center">
        <p className="text-2xl sm:text-3xl md:text-4xl max-w-2xl lg:text-5xl px-8 sm:px-12 md:px-22 font-bold mb-4 sm:mb-6 md:mb-10 lg:mb-16">A melhor estrutura para sua empresa</p>
        <div className="rounded-4xl bg-blue-400/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold py-1 px-16"><p>Salas</p></div>
        <CarrousselOne/>
        <div className="rounded-4xl bg-blue-400/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 sm:mt-6 md:mt-8 lg:mt-12 font-semibold py-1 px-16"><p>Áreas comuns</p></div>
        <CarrousselTwo/>
      </div>

      
    </section>
  );
}
