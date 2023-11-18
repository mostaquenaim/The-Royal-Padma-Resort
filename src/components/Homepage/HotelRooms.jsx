import axios from "axios";
import { useEffect, useState } from "react";
import ShowImage from "./ShowImage";
import Header from "../Header/Header";

const HotelRooms = () => {
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState([]);
    const [amenities, setAmenities] = useState([]);

    useEffect(() => {
        axios.get('https://the-royal-padma-server-side.vercel.app/room-imageries')
            .then(res => {
                setImages(res.data);
                axios.get('https://the-royal-padma-server-side.vercel.app/amenities-imageries')
                    .then(res => {
                        setAmenities(res.data);
                        setLoading(false); // Set loading to false when the data is loaded
                    })
                    .catch(error => {
                        console.error('Error fetching images:', error);
                        setLoading(false); // Set loading to false in case of an error
                    });
            })
            .catch(error => {
                console.error('Error fetching images:', error);
                setLoading(false); // Set loading to false in case of an error
            });


    }, []);

    return (
        <div className="mx-10 mt-20 mb-10">

            {/* <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold mb-8 text-center text-primary transition-transform duration-300 transform hover:scale-105">
                Rooms and Amenities
            </h2> */}
            <Header name='Rooms and Amenities'></Header>
            {
                loading ? (
                    <span className="loading loading-spinner loading-lg"></span>
                ) : (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 gap-8">
                            {images.map((room, index) => (
                                <div key={index}>
                                    <ShowImage image={room}></ShowImage>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                            {amenities.map((amenity, index) => (
                                <div key={index}>
                                    <ShowImage image={amenity}></ShowImage>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default HotelRooms;
