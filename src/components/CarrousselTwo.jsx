'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  { id: "1", image: "/images2-carrossel/cena 01.png", title: "slide1" },
  { id: "2", image: "/images2-carrossel/Cena 02.png", title: "slide2" },
  { id: "3", image: "/images2-carrossel/cena 03.png", title: "slide3" },
  { id: "4", image: "/images2-carrossel/Cena 4 (2).png", title: "slide4" },
  { id: "5", image: "/images2-carrossel/Academia - cena 1.png", title: "slide5" },
  { id: "6", image: "/images2-carrossel/Academia - cena 2.png", title: "slide6" },
  { id: "7", image: "/images2-carrossel/Academia - Cena 3.png", title: "slide7" },
  { id: "8", image: "/images2-carrossel/Descomprensao 1.png", title: "slide8" },
  { id: "9", image: "/images2-carrossel/Descomprensao 2.png", title: "slide9" },
  { id: "10", image: "/images2-carrossel/Descomprensao 3.png", title: "slide10" },
];

const CarrousselTwo = () => {
  return (
    <div className="w-full max-w-3xl px-4 py-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-[200px] sm:h-[300px] md:h-[400px]"
        slidesPerView={1}
        spaceBetween={2}
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

export default CarrousselTwo;
