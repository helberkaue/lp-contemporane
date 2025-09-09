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
                      min-h-[100svh] md:min-h-[100dvh] py-6 sm:py-16 lg:py-32
                      text-white flex flex-col gap-24 justify-between">

        {/* Texto alinhado à direita */}
        <div className="flex-1 flex items-center justify-center md:justify-end">
          <div className="max-w-4xl flex flex-col gap-4 md:p-32 md:px- sm:gap-6 text-center md:text-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              O maior complexo empresarial de Alagoas
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl">
              O novo centro de negócios de Alagoas, integrando conveniência,
              estrutura de alto padrão e localização estratégica.
            </p>
          </div>
        </div>

        {/* Logo centralizado embaixo */}
        <div className="flex justify-center mt-8">
          <Image
            src="/elements/Dobra 1 - Logo.png"
            alt="Logo"
            width={256}
            height={96}
            className="w-48 lg:w-64 h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
