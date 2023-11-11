import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { PROJECTS } from "@/lib/constants";

export const VisionsSection = () => {
  return (
    <section className="mt-24">
      <div className="container flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <h2 className="max-w-2xl text-4xl sm:text-5xl md:text-7xl font-bold">
          View our clients latest visions
        </h2>

        <Link href="/showcase" className="btn group">
          <span>View showcase</span>
          <ArrowLongRightIcon
            className={`w-6 h-6 ml-2 group-hover:translate-x-1 
                        transition-transform`}
          />
        </Link>
      </div>

      <div className="relative mt-16 px-8 md:p-0">
        <div className="-z-10 absolute inset-0 bg-white blur-[100px] opacity-5" />

        <Swiper
          slidesPerView={1}
          spaceBetween={32}
          centeredSlides
          loop
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: { slidesPerView: 1.5 },
            1280: { slidesPerView: 2.5 },
          }}
          modules={[Autoplay]}
        >
          {PROJECTS.map(({ id, src, alt, slug }) => (
            <SwiperSlide key={id}>
              <Link
                href={`/showcase/${slug}`}
                className="block shine-sm rounded overflow-hidden"
              >
                <Image
                  className="-z-10 relative object-cover"
                  src={src}
                  alt={alt}
                  width={800}
                  height={500}
                  quality={100}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
