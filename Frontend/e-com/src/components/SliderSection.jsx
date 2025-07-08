import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Support Local Artisans",
    desc: "Handmade goods crafted with love from local families.",
    image: "https://cdn.pixabay.com/photo/2016/11/29/09/32/crafts-1868415_1280.jpg",
  },
  {
    title: "Fresh Organic Produce",
    desc: "Farm to table freshness, just a click away.",
    image: "https://cdn.pixabay.com/photo/2016/09/07/11/37/vegetables-1659064_1280.jpg",
  },
  {
    title: "Eco-Friendly Packaging",
    desc: "We care about the planet. All orders are packed responsibly.",
    image: "https://cdn.pixabay.com/photo/2018/05/01/20/13/recycle-3366334_1280.jpg",
  },
];

const SliderSection = () => {
  return (
    <section className="bg-zinc-900 text-white py-12">
      <h2 className="text-center text-3xl font-bold text-purple-400 mb-8">What Makes Us Special</h2>
      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-md">
                <img src={"https://www.ulamart.com/blog/wp-content/uploads/2023/09/Organic-food-1.jpg"} alt={slide.title} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-purple-300 mb-2">{slide.title}</h3>
                  <p className="text-gray-400">{slide.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderSection;
