import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { PROJECTS } from "@/lib/constants";

export const HeroCarousel = () => {
  return (
    <nav className="container max-w-[1920px] md:px-8 mt-16 md:mt-24">
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
        {PROJECTS.map(({ id, title, src, alt, slug }) => (
          <SwiperSlide key={id}>
            <Link className="group relative" href={`/showcase/${slug}`}>
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 
                            rounded bg-primary-600/60 text-white 
                            transition-opacity`}
              >
                <div
                  className={`flex items-center justify-center h-full
                              translate-y-2 group-hover:translate-y-0
                              transition-transform`}
                >
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <ArrowUpRightIcon className="w-16 h-16 ml-2" />
                </div>
              </div>

              <Image
                src={src}
                alt={alt}
                className="rounded object-contain"
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
