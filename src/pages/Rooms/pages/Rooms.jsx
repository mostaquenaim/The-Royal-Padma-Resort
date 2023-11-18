import { useEffect, useState } from "react";
import DynamicMySwiper from "../../../components/Swiper/DynamicMySwiper";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import RoomDetails from "../component/RoomDetails";
import Header from "../../../components/Header/Header";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [filteredRooms, setFilteredRooms] = useState([])
    const [loading, setLoading] = useState(true);
    const [minPrice, setMinPrice] = useState(""); // Minimum price filter
    const [maxPrice, setMaxPrice] = useState(""); // Maximum price filter
    const [foundedResult, setFoundedResult] = useState(false)

    const images = useLoaderData();
    console.log(images);
    useEffect(() => {
        axios.get('https://the-royal-padma-server-side.vercel.app/room-details')
            .then((res) => {
                setRooms(res.data);
                setFilteredRooms(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    // Function to apply the price filter
    const applyPriceFilter = () => {
        // Convert minPrice and maxPrice to numbers
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);

        const filteredRooms = rooms.filter((room) => {
            const price = parseFloat(room.price);
            if (!isNaN(min) && !isNaN(max)) {
                return price >= min && price <= max;
            } else if (!isNaN(min)) {
                return price >= min;
            } else if (!isNaN(max)) {
                return price <= max;
            }
            return true;
        });

        setFilteredRooms(filteredRooms);
        setFoundedResult(true)
    };

    // reset filter 
    const resetFilter = () => {
        setFilteredRooms(rooms)
        setFoundedResult(false)
        setMinPrice('')
        setMaxPrice('')
    }

    return (
        <div className="min-h-screen">
            <DynamicMySwiper images={images} />
            <Header name="Explore Our Rooms" />

            {/* Price filter section */}
            <div className="flex flex-col lg:flex-row items-center justify-center mt-5 gap-3">
                <label htmlFor="minPrice" className="mr-2">Min Price:</label>
                <input
                    type="number"
                    id="minPrice"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="Min Price"
                    className="input input-bordered rounded-l text-primary"
                />
                <label htmlFor="maxPrice" className="mx-2">Max Price:</label>
                <input
                    type="number"
                    id="maxPrice"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Max Price"
                    className="input input-bordered rounded-r text-primary"
                />
                <div className="flex gap-2">
                    <button onClick={applyPriceFilter} className="btn btn-accent">Apply Filter</button>
                    <button onClick={resetFilter} className="btn btn-error">Reset</button>
                </div>
            </div>

            {/* show result number */}
            {
                foundedResult &&
                <p className="text-center pt-5"> {filteredRooms.length} results found</p>
            }

            <section className="py-10 mx-10">
                {loading ? (
                    <span className="loading loading-spinner loading-lg"></span>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
                        {filteredRooms.map((item, index) => (
                            <RoomDetails key={index} room={item} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Rooms;
