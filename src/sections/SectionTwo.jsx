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
      <div className="flex text-white flex-col p-6 sm:p-12 md:p-24  items-center text-center gap-4 justify-center">
        <p className="text-2xl sm:text-3xl md:text-4xl max-w-2xl lg:text-5xl px-6 sm:px-12 md:px-22 font-bold lg:mb-24">A melhor estrutura para sua empresa</p>
        <div className="rounded-4xl bg-blue-400/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold py-1 px-16"><p>Salas</p></div>
        <CarrousselOne/>
        <div className="rounded-4xl bg-blue-400/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold py-1 px-16"><p>Áreas comuns</p></div>
        <CarrousselTwo/>
      </div>

      
    </section>
  );
}


{/* <div className="flex flex-col items-center text-center text-white gap-12 px-4 py-12 sm:py-16 lg:py-24">
  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-lg w-full">
    A melhor estrutura para sua empresa
  </p>

  <div className="max-w-4xl flex flex-col gap-8">
    <div className="px-6 backdrop-blur-sm flex flex-col items-center justify-center">
      <p className="text-2xl rounded-3xl py-1 sm:py-2 w-58 bg-blue-500/90 md:text-3xl font-semibold mb-4">Salas</p>
      <CarrousselOne />
    </div>

    <div className="px-6 backdrop-blur-sm flex flex-col items-center justify-center">
      <p className="text-2xl rounded-3xl py-1 sm:py-2 w-84 bg-blue-500/90 md:text-3xl font-semibold mb-4">Áreas comuns</p>
      <CarrousselTwo />
    </div>
  </div>
</div> */}