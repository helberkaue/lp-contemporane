import Image from "next/image"

export default function SectionFour() {
    return (
        <div className="bg-white min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-16 flex flex-col gap-12 items-center justify-center text-center">
                
                {/* Título */}
                <p className="text-2xl sm:text-3xl lg:text-4xl text-blue-500 font-bold">
                    Quem somos
                </p>

                {/* Texto + Logo */}
                <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 gap-10">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-500 text-justify leading-relaxed">
                        A Contemporânea é uma construtora alagoana com sólida atuação nos segmentos de 
                        construção civil e incorporação imobiliária. Com mais de 20 anos de experiência e 
                        um histórico familiar consolidado, a empresa tem como propósito desenvolver 
                        empreendimentos que aliem qualidade, inovação e segurança. 
                        <br /><br />
                        Comprometida com os mais altos padrões de engenharia e tecnologia, a Contemporânea 
                        entrega projetos que atendem às expectativas de um público criterioso, focado na 
                        valorização patrimonial e na excelência em cada detalhe.
                    </p>

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
