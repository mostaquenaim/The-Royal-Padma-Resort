import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert
import BookingUpdateModal from './BookingUpdateModal';
import { useState } from 'react';

const ShowMyBooking = ({ booking, index, handleCancelBooking, handleUpdateBooking }) => {

    // const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    // const formattedDate = booking.date.toLocaleString(dateOptions);
    // const formattedDate = booking.date.toDateString()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const formattedDate = new Date(booking.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const handleCancel = () => {
        const todaysDate = new Date();
        const bookingDate = new Date(booking.date);
        const timeDifference = bookingDate - todaysDate; // Calculate the time difference in milliseconds
        const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60)); // Convert to hours
    
        if (hoursDifference >= 24) {
            Swal.fire({
                title: 'Confirm Cancellation',
                text: 'Are you sure you want to cancel this booking?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, cancel it!',
                cancelButtonText: 'No, keep it',
            }).then((result) => {
                if (result.isConfirmed) {
                    handleCancelBooking(booking._id);
                }
            });
        } else {
            Swal.fire({
                title: 'Cannot Cancel',
                text: 'It is too late to cancel this booking.',
                icon: 'error',
            });
        }
    };
    

    

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    return (
        <>
            < tr >
                <th>
                    <label>
                        {/* <input type="checkbox" className="checkbox" /> */}
                        {index}
                    </label>
                </th>
                <td>
                    <Link to={`/room-details/${booking.room._id}`} className="flex items-center space-x-3 hover:scale-105 duration-300">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={booking.room.featuredImage} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{booking.room.name}</div>
                            {/* <div className="text-sm opacity-50">United States</div> */}
                        </div>
                    </Link>
                </td>
                <td>
                    <span> {formattedDate} </span>
                </td>
                <td>{booking.room.price} BDT</td>
                <th>
                    <button className="btn btn-accent btn-xs" onClick={openModal}>UPDATE</button>
                </th>
                <th>
                    <button className="btn btn-error btn-xs" onClick={handleCancel}>CANCEL</button>
                </th>
            </tr >
            <BookingUpdateModal isOpen={isModalOpen} onClose={closeModal} booking={booking} handleUpdateBooking={handleUpdateBooking}/>
        </>
    );
};

export default ShowMyBooking;