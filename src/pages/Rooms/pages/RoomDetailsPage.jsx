import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth/AuthProvider";
import ShowReview from "../component/ShowReview";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles for react-datepicker
import Header from "../../../components/Header/Header";
import BookingConfirmModal from "../component/BookingConfirmModal";
import toast from "react-hot-toast";
import RoomImages from "../../../components/Swiper/RoomImages";

const RoomDetailsPage = () => {
    const room = useLoaderData();
    const { user, loading } = useContext(AuthContext);
    console.log(user);

    const [userReview, setUserReview] = useState({
        rating: 5,
        comment: "",
    });
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [reviews, setReviews] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isEnable, setIsEnable] = useState(true)
    const [seats, setSeats] = useState(room.seats)
    const [isBooked, setIsBooked] = useState(false)
    // Set reviews


    useEffect(() => {
        axios.get(`https://the-royal-padma-server-side.vercel.app/room-reviews/${room._id}`)
            .then((res) => setReviews(res.data));
        // const getBookingDetail = () => {
        axios.get(`https://the-royal-padma-server-side.vercel.app/bookings?email=${user?.email}`, {
            withCredentials: true
        })
            .then((res) => {
                console.log("data--", res.data);
                const findRoom = res.data.find((item) => item.room._id == room._id)
                setIsBooked(findRoom)
            });
        // }

    }, [room, user]);

    const openModal = () => {
        if (user) {
            if (selectedDate) {
                setIsEnable(true)
                setIsModalOpen(true);
            }
            else {
                toast.error('You have set a booking date', {
                    duration: 5000,
                    style: {
                        background: 'red',
                        color: 'white',
                    },
                });
            }
        }
        else{
            //navigate to login page with setting this page as state
            navigate('/login')
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const onConfirm = () => {
        setIsEnable(false)
        axios.post(`https://the-royal-padma-server-side.vercel.app/book-room/${room._id}`, {
            room: room,
            user: user,
            date: selectedDate,
        })
            .then(() => {
                closeModal()
                toast('Thank you for booking!', {
                    duration: 5000,
                    style: {
                        background: 'green',
                        color: 'white',
                    },
                });
                setSeats(seats - 1)
            })
            .catch((error) => {
                console.error("Error booking:", error);
            });
    }

    const postReview = () => {
        axios
            .post("https://the-royal-padma-server-side.vercel.app/post-reviews", {
                room: room,
                user: user,
                rating: userReview.rating,
                comment: userReview.comment,
                timestamp: new Date(),
            })
            .then(() => {
                setUserReview({ rating: 0, comment: "" });

                // Show a success toast notification
                toast.success('Review submitted successfully!', {
                    duration: 3000, // Adjust the duration as needed
                    style: {
                        background: 'green',
                        color: 'white',
                    },
                });
            })
            .catch((error) => {
                console.error("Error posting review:", error);

                // Show an error toast notification
                toast.error('Error submitting review. Please try again.', {
                    duration: 3000, // Adjust the duration as needed
                    style: {
                        background: 'red',
                        color: 'white',
                    },
                });
            });
    };


    return (
        <>
            {
                loading ?
                    <span className="loading loading-spinner loading-lg"></span>
                    :
                    <div className="bg-primary text-base-100 text-opacity-80 min-h-screen">
                        <div className="relative">
                            <img src={room.featuredImage} alt={room.name} className="w-full h-full" />
                            <div className="inset-0 bg-opacity-60 absolute bg-primary h-full"></div>
                        </div>
                        <Header name={room.name}></Header>
                        <section className="py-10">
                            <RoomImages images={room.images}></RoomImages>
                        </section>
                        <div className="mx-4 md:mx-12">
                            <p className="text-lg md:text-xl lg:text-2xl mt-4">{room.description}</p>
                            <p className="text-xl md:text-2xl lg:text-3xl text-base-100 text-opacity-80 font-semibold mt-4">
                                Price per Night: {room.price} BDT
                            </p>
                            <p className="text-xl md:text-2xl lg:text-3xl text-base-100 text-opacity-80 font-semibold mt-2">
                                Special Offer: {room?.specialOffer ? room?.specialOffer : "No offer available"}
                            </p>
                            <p className="text-xl md:text-2xl lg:text-3xl text-base-100 text-opacity-80 font-semibold mt-2">
                                Room Size: {room.roomSize}
                            </p>
                            <p className="text-sm md:text-base lg:text-lg text-base-100 text-opacity-80 font-semibold mt-2">
                                {seats > 0 ? (
                                    <span className="text-info">{seats} seats available</span>
                                ) : (
                                    <span className="text-red-500">No seats available</span>
                                )}
                            </p>

                            {seats > 0 && (
                                <div className="mt-4">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-base-100 text-opacity-80">
                                        Select Booking Date:
                                    </h3>
                                    <DatePicker
                                        selected={selectedDate}
                                        startDate={new Date()}
                                        onChange={(date) => setSelectedDate(date)}
                                        dateFormat="dd/MM/yyyy"
                                        minDate={new Date()}
                                        className="w-full py-2 px-3 text-lg md:text-xl lg:text-2xl text-base-100 text-opacity-80"
                                    />
                                    <button
                                        className={`btn btn-accent m-4 text-base-100 text-opacity-80`}
                                        onClick={openModal}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            )}

                            {reviews.length > 0 && (
                                <p className="text-xl md:text-2xl lg:text-3xl font-semibold mt-4 text-base-100 text-opacity-80">
                                    {reviews.length} Reviews
                                </p>
                            )}

                            {user && isBooked ? (
                                <div className="mt-6">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-base-100 text-opacity-80">
                                        Post a Review
                                    </h3>
                                    <div className="mt-4">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-base-100 text-opacity-80">
                                            Your Rating:
                                        </h3>
                                        <select
                                            className="select select-bordered w-full py-2 px-3 text-lg md:text-xl lg:text-2xl text-primary text-opacity-80"
                                            value={userReview.rating}
                                            onChange={(e) =>
                                                setUserReview({ ...userReview, rating: e.target.value })
                                            }
                                            required
                                        >
                                            <option value="1">1 - Poor</option>
                                            <option value="2">2 - Fair</option>
                                            <option value="3">3 - Good</option>
                                            <option value="4">4 - Very Good</option>
                                            <option value="5">5 - Excellent</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-lg md:text-xl lg:text-2xl font-semibold text-base-100 text-opacity-80">
                                            Comment:
                                        </label>
                                        <textarea
                                            value={userReview.comment}
                                            onChange={(e) =>
                                                setUserReview({ ...userReview, comment: e.target.value })
                                            }
                                            className="input input-bordered w-full py-2 px-3 text-lg md:text-xl lg:text-2xl text-primary text-opacity-80"
                                            required
                                        />
                                    </div>
                                    <button
                                        className="btn btn-accent text-lg md:text-xl lg:text-2xl text-base-100 text-opacity-80"
                                        onClick={postReview}
                                    >
                                        Submit Review
                                    </button>
                                </div>
                            ) : (
                                ""
                            )}

                            {reviews.length === 0 ? (
                                <p className="text-xl md:text-2xl lg:text-3xl mt-6 text-base-100 text-opacity-80">
                                    No reviews yet! Be the first to share your experience.
                                </p>
                            ) : (
                                <div className="mt-6">
                                    {reviews.map((review, index) => (
                                        <ShowReview key={index} review={review} />
                                    ))}
                                </div>
                            )}
                        </div>
                        <BookingConfirmModal
                            onClose={closeModal}
                            isOpen={isModalOpen}
                            room={room}
                            date={selectedDate}
                            onConfirm={onConfirm}
                            isEnable={isEnable}
                        />
                    </div>
            }
        </>
    );

};

export default RoomDetailsPage;
