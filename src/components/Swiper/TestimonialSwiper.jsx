import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TestimonialSwiper = ({ reviews }) => {
  return (
    <Swiper
      slidesPerView={1} // Default slidesPerView for small screens
      breakpoints={{
        640: {
          slidesPerView: 2, // 2 slides per view for medium screens (screens with width 640px or more)
        },
      }}
      centeredSlides={true}
      spaceBetween={10}
      loop={true}
      navigation
      modules={[Pagination, Navigation]}
      className="mySwiper overflow-hidden"
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <Link to={`/room-details/${review.room._id}`} className="py-10 flex flex-col items-center justify-center text-center text-primary bg-base-200 shadow-md rounded-lg">
            <div className="text-lg md:text-3xl lg:text-6xl mb-4">
              <FaQuoteLeft />
            </div>
            <p className="text-lg mb-4 sm:px-4 md:px-8 lg:px-16">
              {review.comment}
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={review.user.photoURL}
                  alt={review.user.displayName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold">
                  {review.user.displayName}
                </h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSwiper;
