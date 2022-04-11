import bell from "../assets/bell.png";
import homenavbar1 from "../assets/homenavbar1.png";
import homenavbar2 from "../assets/homenavbar2.png";
import homenavbar3 from "../assets/homenavbar3.png";
import homenavbar4 from "../assets/homenavbar4.png";
import homenavbar5 from "../assets/homenavbar5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Navigate, NavLink } from "react-router-dom";

const HomeNavbar = () => {
  // const navigate = Navigate();
  return (
    <div
      className="p-0 m-0  fixed top-0 z-50 -mx-3 w-full"
      style={{ maxWidth: "425px" }}
    >
      <nav className="bg-navbar pt-8 px-4 pb-4 rounded-b-2xl m-0 text-white mx-auto shadow-lg  w-full">
        <div className="flex justify-start items-center m-0">
          <div className="flex flex-col justify-center items-start m-0">
            <h4 className="text-4xl font-extrabold font-poppins">Hello,</h4>
            <small className="text-base font-semibold ">
              What is your Favourite meal?
            </small>
            <div className="flex justify-between w-full mt-3">
              <NavLink
                className="bg-white rounded text-black px-4 py-2 shadow-lg m-0"
                to={"menu"}
              >
                <span className="font-poppins font-semibold text-sm">MENU</span>
              </NavLink>
              <button className="text-white  border border-white rounded p-2 flex items-center justify-around mr-3">
                <img src={bell} alt="bell" className="px-2" />
                <span className=" text-xs font-nunito font-extrabold">
                  Call Waiter
                </span>
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            speed={5000}
            spaceBetween={10}
            loop={true}
            slidesPerView={1}
            direction="vertical"
            // pagination={{ clickable: true }}

            style={{
              maxWidth: "130px",
              height: "100%",
              margin: "0px",
              position: "absolute",
              top: "0px",
              right: "0px",
            }}
            // navigation
            autoplay={{ delay: 1500, disableOnInteraction: false }}
          >
            {[
              homenavbar1,
              homenavbar2,
              homenavbar3,
              homenavbar4,
              homenavbar5,
            ].map((imgsrc) => {
              return (
                <SwiperSlide>
                  <div className="rounded-lg overflow-hidden w-32 h-full flex justify-center items-center">
                    <img
                      src={imgsrc}
                      alt="background"
                      className="object-cover w-full"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </nav>
    </div>
  );
};

export default HomeNavbar;
