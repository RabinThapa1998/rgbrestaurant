import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import bg from "../assets/bg1.png";
const SwiperComponent = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      // navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      className="my-4"
      style={{ minHeight: "160px" }}
    >
      <SwiperSlide>
        <div className="h-40 w-full rounded-lg overflow-hidden ">
          <img
            src={bg}
            alt="background"
            className="object-cover w-full h-full "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-40 w-full rounded-lg overflow-hidden ">
          <img
            src={bg}
            alt="background"
            className="object-cover w-full  h-full "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-40 w-full rounded-lg overflow-hidden ">
          <img
            src={bg}
            alt="background"
            className="object-cover w-full   h-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-40 w-full rounded-lg overflow-hidden ">
          <img
            src={bg}
            alt="background"
            className="object-cover w-full  h-full "
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
