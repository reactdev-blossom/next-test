import { Swiper, SwiperSlide } from "swiper/react";
import backgroundImage_home from "../public/car1.png";

const TransPortAvtar = ({ data }: { data: string[] }) => {
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
        className="h-auto py-10 w-full"
      >
        {data.map((slide: string, i: number) => (
          <SwiperSlide key={i} className="w-fit">
            <div className="flex flex-col justify-center items-center gap-4 h-full w-fit">
              <div
                className="image rounded-full w-[10.63rem] h-[10.63rem] bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage_home})` }}
              ></div>
              <p className="title text-[#0C3227] font-semibold  text-[1.25rem] leading-[1.53rem]">
                {slide}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default TransPortAvtar;
