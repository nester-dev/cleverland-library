import { FC, useState } from "react";
import { FreeMode, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import cn from "clsx";
import { BookPreviewProps } from "@/components/ui/Book/BookInformation/BookPreview/BookPreview.tsx";
import styles from "./BookImage.module.scss";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/pagination";

const BookSlider: FC<BookPreviewProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

  return (
    <div>
      <Swiper
        spaceBetween={10}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Thumbs, Pagination]}
        pagination
        className={cn(styles.image, "mb-4 !pb-10 md:!pb-0")}
      >
        {images?.map(slide => (
          <SwiperSlide key={slide.url}>
            <img
              className="h-full w-full object-center"
              src={slide?.url}
              alt="book preview"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative hidden md:block">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={30}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Thumbs]}
          centerInsufficientSlides
          className="h-[86px] w-full"
          breakpoints={{ 1024: { slidesPerView: 5 } }}
        >
          {images?.map(slide => (
            <SwiperSlide key={slide.url}>
              <img
                className="h-full w-full"
                src={slide?.url}
                alt="book preview"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pointer-events-none absolute inset-0 z-10 !hidden bg-sliderGradient md:!block" />
      </div>
    </div>
  );
};

export default BookSlider;
