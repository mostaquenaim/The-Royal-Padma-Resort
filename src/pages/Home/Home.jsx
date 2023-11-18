import { useRef } from "react";
import Banner from "../../components/Banner/Banner";
import HotelRooms from "../../components/Homepage/HotelRooms";
import SpecialOffer from "../../components/Homepage/SpecialOffer";
import NewsLetter from "../../components/Homepage/NewsLetter";
import Testimonials from "../../components/Homepage/Testimonials";
import Test from "../../components/Homepage/test";
import TestimonialSwiper from "../../components/Swiper/TestimonialSwiper";
import TabTesting from "../../components/Homepage/TabTesting";

const Home = () => {
    const parallaxSectionRef = useRef(null);
    const scrollToParallaxSection = () => {
        // Check if the parallaxSectionRef is available
        if (parallaxSectionRef.current) {
            // Use scrollIntoView to scroll to the section
            parallaxSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="min-h-screen text-base-100">
            <Banner fnc={scrollToParallaxSection}></Banner>
            {/* <section ref={parallaxSectionRef} id="parallax" className="parallax-section min-h-screen">
                <ParallaxTesting></ParallaxTesting>
            </section> */}
            {/* <TabsComp></TabsComp> */}
            {/* <StunningImagery></StunningImagery> */}
            {/* <TabTesting></TabTesting> */}
            <section ref={parallaxSectionRef} id="parallax">
                <TabTesting></TabTesting>
                {/* <HotelRooms></HotelRooms> */}
            </section>
            <SpecialOffer></SpecialOffer>
            <Testimonials></Testimonials>
            {/* <Test></Test> */}
            {/* <TestimonialSwiper></TestimonialSwiper> */}
            <NewsLetter></NewsLetter>
            {/* <FeaturedRooms></FeaturedRooms> */}
        </div>
    );
};

export default Home;
