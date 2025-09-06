'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// estilos do Swiper (uma vez só)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  { id: "1", image: "/images1-carrossel/Auditorio - cena 1.png", title: "slide1" },
  { id: "2", image: "/images1-carrossel/Auditorio - cena 2.png", title: "slide2" },
  { id: "3", image: "/images1-carrossel/Auditorio - cena 3.png", title: "slide3" },
  { id: "5", image: "/images1-carrossel/cena 1.png", title: "slide5" },
  { id: "6", image: "/images1-carrossel/cena 2.png", title: "slide6" },
  { id: "7", image: "/images1-carrossel/cena 3.png", title: "slide7" },
  { id: "8", image: "/images1-carrossel/cena 4.png", title: "slide8" },
  { id: "9", image: "/images1-carrossel/cena 1.png", title: "slide9" },
  { id: "10", image: "/images1-carrossel/cena 2 (1).png", title: "slide10" },
  { id: "11", image: "/images1-carrossel/cena 3 (1).png", title: "slide11" },
  { id: "12", image: "/images1-carrossel/cena 4 (1).png", title: "slide12" },
  { id: "13", image: "/images1-carrossel/Sala de reunião - Cena 1.png", title: "slide13" },
  { id: "14", image: "/images1-carrossel/Sala de reunião - Cena 2.png", title: "slide14" },
  { id: "15", image: "/images1-carrossel/Sala de reunião - Cena 3.png", title: "slide15" },
  { id: "16", image: "/images1-carrossel/Sala de reunião - Cena 4.png", title: "slide16" }
];

const CarrousselOne = () => {
  return (
    <div className="w-full max-w-3xl px-4 py-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-[200px] sm:h-[300px] md:h-[400px]"
        slidesPerView={1}
        spaceBetween={10}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full rounded-2xl overflow-hidden group">
              <Image
                src={item.image}
                alt={`Imagem ${item.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarrousselOne;
