import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full">
      <Image
        src="/images-bg/Dobra 1 BG.png"
        fill
        priority
        alt="Background"
        sizes="100vw"
        className="-z-10 object-cover"
        fetchPriority="high"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8
                      min-h-[100svh] md:min-h-[100dvh] py-6 sm:py-10 lg:py-12
                      text-white flex flex-col gap-64">
        <div className="flex justify-center">
          <Image
            src="/elements/Dobra 1 - Logo.png"
            alt="Logo"
            width={256}
            height={96} 
            className="w-24 sm:w-32 lg:w-64 h-auto"
            priority
          />
        </div>

        <div className="flex-1 flex items-center">
          <div className="mx-auto max-w-4xl flex flex-col gap-4 sm:gap-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight px-2 sm:px-6 md:px-32">
              O maior complexo empresarial de Alagoas
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl leading-snug px-4 sm:px-6 md:px-12">
              O novo centro de negócios de Alagoas, integrando conveniência,
              estrutura de alto padrão e localização estratégica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
