import React from 'react';

const TestimonialSlider = () => {
  return (
    <section className="container h-screen flex items-center justify-center bg-blue-200">
      <div className="testimonial relative max-w-screen-md w-full py-10 overflow-hidden">
        <div className="testi-content swiper-wrapper">
          {/* Testimonial Slide 1 */}
          <div className="slide swiper-slide flex items-center flex-col space-y-5">
            <img src="#" alt="" className="image h-170 w-170 rounded-full object-cover" />
            <p className="text-center px-8 text-sm font-normal text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci, fugit, architecto amet asperiores doloremque deserunt eum nemo.
            </p>
            <i className="bx bxs-quote-alt-left quote-icon text-3xl text-blue-500"></i>
            <div className="details flex flex-col items-center">
              <span className="name text-sm font-semibold text-gray-700">Marnie Lotter</span>
              <span className="job text-xs font-normal text-gray-700">Web Developer</span>
            </div>
          </div>

          {/* Testimonial Slide 2 */}
          <div className="slide swiper-slide flex items-center flex-col space-y-5">
            <img src="#" alt="" className="image h-170 w-170 rounded-full object-cover" />
            <p className="text-center px-8 text-sm font-normal text-gray-700">
              Another testimonial content goes here. You can customize it as needed.
            </p>
            <i className="bx bxs-quote-alt-left quote-icon text-3xl text-blue-500"></i>
            <div className="details flex flex-col items-center">
              <span className="name text-sm font-semibold text-gray-700">John Doe</span>
              <span className="job text-xs font-normal text-gray-700">Designer</span>
            </div>
          </div>

          {/* Testimonial Slide 3 */}
          <div className="slide swiper-slide flex items-center flex-col space-y-5">
            <img src="#" alt="" className="image h-170 w-170 rounded-full object-cover" />
            <p className="text-center px-8 text-sm font-normal text-gray-700">
              Yet another testimonial content. Feel free to customize it for your use case.
            </p>
            <i className="bx bxs-quote-alt-left quote-icon text-3xl text-blue-500"></i>
            <div className="details flex flex-col items-center">
              <span className="name text-sm font-semibold text-gray-700">Jane Smith</span>
              <span className="job text-xs font-normal text-gray-700">Marketing Manager</span>
            </div>
          </div>
        </div>
        <div className="swiper-button-next nav-btn h-10 w-10 rounded-full transform translate-y-5 bg-opacity-10 hover:bg-opacity-20 text-white text-lg"></div>
        <div className="swiper-button-prev nav-btn h-10 w-10 rounded-full transform translate-y-5 bg-opacity-10 hover:bg-opacity-20 text-white text-lg"></div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
