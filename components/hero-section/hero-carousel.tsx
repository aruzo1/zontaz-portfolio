import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  { src: "/images/project-1.png", alt: "project 1", slug: "project-1" },
  { src: "/images/project-2.png", alt: "project 2", slug: "project-2" },
  { src: "/images/project-3.png", alt: "project 3", slug: "project-3" },
  { src: "/images/project-4.png", alt: "project 4", slug: "project-4" },
  { src: "/images/project-3.png", alt: "project 2", slug: "project-2" },
];

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
        {slides.map(({ src, alt, slug }, i) => (
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
