import Image from "next/image"

export default function SectionFour() {
    return (
        <div className="bg-white min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-24 flex flex-col gap-14 items-center justify-center text-center">
                {/* <p className="text-2xl sm:text-3xl lg:text-4xl text-blue-500 font-bold">
                    Quem somos
                </p> */}

                <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 gap-12">

                    <div className="flex flex-col md:flex-row items-center gap-10 text-left">
                        <div className="flex flex-col gap-8 items-center ">
                            <p className="text-2xl sm:text-3xl lg:text-4xl text-blue-500 font-bold">
                                Quem somos
                            </p>
                            <p className="text-left sm:text-lg md:text-xl lg:text-2xl text-[#323232] leading-relaxed flex-1">
                                A Contemporânea é uma construtora alagoana com sólida atuação nos segmentos de
                                construção civil e incorporação imobiliária. Com mais de 20 anos de experiência e
                                um histórico familiar consolidado, a empresa tem como propósito desenvolver
                                empreendimentos que aliem qualidade, inovação e segurança.
                                Comprometida com os mais altos padrões de engenharia e tecnologia, a Contemporânea
                                entrega projetos que atendem às expectativas de um público criterioso, focado na
                                valorização patrimonial e na excelência em cada detalhe.
                            </p>
                        </div>

                        <Image
                            src={"/elements/image-quemSomos.jpeg"}
                            width={400}
                            height={300}
                            alt="Equipe Contemporânea"
                            className="rounded-2xl object-cover w-full max-w-md"
                        />
                    </div>

                    <Image
                        src={"/elements/Dobra 5 - Logo.png"}
                        width={250}
                        height={80}
                        alt="Logo Contemporânea"
                        className="w-40 sm:w-52 md:w-64 lg:w-72 h-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
