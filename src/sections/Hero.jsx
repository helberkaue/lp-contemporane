import Image from "next/image"

export default function Hero() {
    return (
        <div className="w-full h-screen">
            <Image
                src="/images-bg/Dobra 1 - BG.png"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 flex flex-col items-center text-center justify-center text-white">
                <Image
                src="/elements/Dobra 1 - Logo.png"
                width={120}
                height={500}
                />
                <div className="text-center px-64">
                    <h1 className="text-4xl font-bold">O maior complexo empresarial de Alagoas</h1>
                    <p className="mt-4 text-lg">O novo centro de negócios de Alagoas integrando conveniência, estrutura de alto padrão e localização</p>
                </div>
            </div>
        </div>
    )
}