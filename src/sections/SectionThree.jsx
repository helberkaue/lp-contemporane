import Image from "next/image"

export default function SectionThree() {
    return (
        <div className="relative w-full py-24 min-h-[600px] md:min-h-screen">
            <Image
                src={"/images-bg/Dobra 4 BG.png"}
                fill
                priority
                alt="Background"
                className="-z-10 object-cover"
                sizes="100vw"
            />

            <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10 md:gap-16 px-4 md:px-8 lg:px-16">
                <p className="text-white sm:text-xl text-3xl md:text-5xl font-bold">
                    O endereço certo para <br />o seu negócio crescer
                </p>
                <div className=" flex flex-col items-center text-center">
                    <Image
                        src={"/elements/MAPA.png"}
                        width={900}
                        height={300}
                        alt="Mapa"
                        className="max-w-full h-auto"
                        priority
                    />
                    <div className="rounded-4xl bg-[#66aade] text-xl sm:text-2xl text-white md:text-3xl lg:text-4xl font-semibold py-1 px-12"><p>Cruz das almas</p></div>
                </div>

                <Image
                    src={"/elements/Dobra 6 Loc.jpeg"}
                    width={700}
                    height={300}
                    alt="Localização"
                    className="rounded-3xl max-w-full h-auto mt-6"
                    priority
                />
            </div>
        </div>
    )
}
