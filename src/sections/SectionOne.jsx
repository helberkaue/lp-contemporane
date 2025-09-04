import Image from "next/image"

export default function SectionOne() {
    return (
    <div className="h-screen relative">
        <div className="absolute inset-0 flex flex-col items-center text-center justify-center text-white">
            <p>O Parque dentro do Parque com a melhor estrutura para comportar a sua empresa</p>
            <div>
                <p>Próximo ao maior hospital Unimed do estado</p>
                <p>Salas comerciais a partir de 39m²</p>
                <p>Acesso direto ao Parque Shopping - Elevador</p>
                <p>Salas comerciais para todo porte de empresa</p>
                <p className="font-bold">Entrega 2028</p>
            </div>
        </div>
    </div>
    )
}