import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { SLIDES } from "./constants";

export const HeroCarousel = () => {
  return (
    <nav className="container relative max-w-[1920px] md:px-8 mt-16 md:mt-24">
      <Swiper
        loop
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={32}
        breakpoints={{
          640: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
      >
        {SLIDES.map(({ src, alt, slug }, i) => (
          <SwiperSlide key={i}>
            <Link href={`/work/${slug}`}>
              <Image
                src={src}
                alt={alt}
                className="rounded object-fit"
                height={360}
                width={640}
                quality={100}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </nav>
  );
};
