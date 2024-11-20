"use client";
// Dynamically import Swiper components with ssr: false
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);
import "swiper/swiper-bundle.css";
import CustomButtonChip from "./CustomButtonChip";
import dynamic from "next/dynamic";

const ScrollableCard = ({ data }: { data: string[] }) => {
  return (
    <div className="w-full h-auto">
      <Swiper
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
          1440: {
            slidesPerView: 5,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((data: string, i: number) => (
          <SwiperSlide key={i}>
            <CustomButtonChip text={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScrollableCard;
