import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthProvider";
import axios from "axios";
import Header from "../../../components/Header/Header";
import ShowMyBooking from "./component/ShowMyBooking";
import Swal from 'sweetalert2'; // Import SweetAlert
import toast from 'react-hot-toast';
import { getAuth, signOut } from "firebase/auth";
import app from "../../../firebase/firebase.config";
const auth = getAuth(app);

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [myBookings, setMyBookings] = useState([])
    const [loading, setLoading] = useState(true)
    // https://the-royal-padma-server-side.vercel.app
    // https://the-royal-padma-server-side.vercel.app
    useEffect(() => {
        if (user && user.email) {
            axios.get(`https://the-royal-padma-server-side.vercel.app/bookings?email=${user.email}`, {
                withCredentials: true
            })
                .then((response) => {
                    setMyBookings(response.data);
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false)
                    // axios.post('https://the-royal-padma-server-side.vercel.app/logout', user, {
                    //     withCredentials: true
                    // })
                    //     .then(res => {
                    //         console.log(res.data);
                    //         return signOut(auth);
                    //     })
                });
        }
    }, [user]);

    // delete booking from database    
    const handleCancelBooking = (bookingId) => {
        axios.delete(`https://the-royal-padma-server-side.vercel.app/deleteBooking/${bookingId}`)
            .then((response) => {
                console.log(response.data)
                if (response.data.deletedCount) {
                    Swal.fire('Cancelled!', 'Your booking has been canceled.', 'success');
                    const updatedBookings = myBookings.filter((b) => b._id !== bookingId);
                    setMyBookings(updatedBookings);
                } else {
                    Swal.fire('Error', 'An error occurred while canceling the booking.', 'error');
                }
            })
            .catch((error) => {
                Swal.fire('Error', 'An error occurred while canceling the booking.', error);
            });
    };

    // update booking 
    const handleUpdateBooking = (bookingId, newDate) => {
        console.log("client in");
        axios.patch(`https://the-royal-padma-server-side.vercel.app/updateBookings/${bookingId}?email=${user.email}`, {
            date: newDate
        })
            .then((response) => {
                setMyBookings(response.data);
                if (response.data) {
                    // setTimeout(() => {
                    toast('Booking Date is Updated!', {
                        duration: 5000,
                        style: {
                            background: 'green',
                            color: 'white',
                        },
                    });
                    // }, 1000);
                } else {
                    Swal.fire('Error', 'An error occurred while canceling the booking.', 'error');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div>
                <img className="w-full" src='https://i.ibb.co/vx4gWgN/booking-banner.jpg'></img>
                <Header name='My Bookings'></Header>
                {
                    loading ?
                        <span className="loading loading-spinner loading-lg"></span>
                        :
                        <section>
                            {
                                myBookings.length > 0 ?
                                    <div className="overflow-x-auto">
                                        <table className="table text-base-200">
                                            {/* head */}
                                            <thead className="text-base-200 font-bold text-base md:text-lg">
                                                <tr>
                                                    <th>
                                                        <label>
                                                            {/* <input type="checkbox" className="checkbox" /> */}
                                                        </label>
                                                    </th>
                                                    <th>Room Name</th>
                                                    <th>Booking Date</th>
                                                    <th>Price</th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    myBookings.map((booking, index) => (
                                                        <ShowMyBooking key={index} booking={booking} index={index + 1} handleUpdateBooking={handleUpdateBooking} handleCancelBooking={handleCancelBooking}></ShowMyBooking>
                                                    ))
                                                }

                                            </tbody>

                                        </table>
                                    </div>
                                    :
                                    <p className="text-center text-error">You haven't booked any rooms yet</p>
                            }
                        </section>
                }
            </div>
        </>
    );
};

export default MyBookings;
