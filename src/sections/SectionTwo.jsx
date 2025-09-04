import Image from "next/image"

export default function SectionTwo() {
    return (
    <div className="h-screen relative">
        <div className="absolute inset-0 flex flex-col items-center text-center justify-center text-white">
            <p>A melhor estrutura para sua empresa</p>
            <div>
                <div>
                    <p>Salas</p>
                </div>
                <div>
                    <p>Áreas comuns</p>
                </div>
            </div>
        </div>
    </div>
    )
}