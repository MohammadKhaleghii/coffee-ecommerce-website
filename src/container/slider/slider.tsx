import { SliderProps } from "./slider.interface";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider: React.FC<SliderProps> = (props: SliderProps) => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        className="mySwiper min-h-[300px]"
      >
        {props.slider.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.sliderPath}
              className="w-full rounded-3xl"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
