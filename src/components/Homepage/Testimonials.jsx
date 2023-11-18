import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import TestimonialSwiper from "../Swiper/TestimonialSwiper";

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get(`https://the-royal-padma-server-side.vercel.app/all-reviews`)
            .then(res => setReviews(res.data))
    }, [])
    return (
        // grid grid-cols-1 md:grid-cols-2 gap-3
        <div className="mx-10">
            <Header name='Testimonials'></Header>
            <TestimonialSwiper reviews={reviews && reviews} ></TestimonialSwiper>
        </div>
    );
};

export default Testimonials;