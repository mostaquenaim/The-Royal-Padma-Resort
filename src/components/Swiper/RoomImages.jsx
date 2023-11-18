import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const RoomImages = ({ images }) => {
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
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="">
                        <img src={image} className='shadow-md rounded-lg border-base-100 border-2'></img>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default RoomImages;
