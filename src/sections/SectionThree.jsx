import Image from "next/image"

export default function SectionTwo() {
    return (
    <div className="h-screen relative">
        <div className="absolute inset-0 flex flex-col items-center text-center justify-center text-white">
            <Image
                src={"/elements/Dobra 3- Mapa.png"}
            />
            <p>O endereço certo para o seu negócio crescer</p>
            <Image
                src={""}
            />
        </div>
    </div>
    )
}