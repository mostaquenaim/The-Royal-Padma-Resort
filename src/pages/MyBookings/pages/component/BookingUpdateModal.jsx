import PropTypes from 'prop-types';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2'; // Import SweetAlert

const BookingUpdateModal = ({ isOpen, onClose, booking, handleUpdateBooking }) => {
    const [newDate, setNewDate] = useState();

    if (!isOpen) {
        return null;
    }

    const handleUpdate = () => {
        onClose()
        const todaysDate = new Date();
        const bookingDate = new Date(booking.date);
        const timeDifference = bookingDate - todaysDate; // Calculate the time difference in milliseconds
        const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60)); // Convert to hours

        if (hoursDifference >= 24) {
            Swal.fire({
                title: 'Confirm Update',
                text: 'Are you sure you want to update this booking?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, update it!',
                cancelButtonText: 'No',
            }).then((result) => {
                if (result.isConfirmed) {
                    handleUpdateBooking(booking._id, newDate);
                    // console.log("jasn");
                }
            });
        } else {
            Swal.fire({
                title: 'Cannot Update',
                text: 'It is too late to update this booking.',
                icon: 'error',
            });
        }
    };

    return (
        <div className="fixed bottom-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="absolute w-full h-full bg-neutral opacity-80" onClick={onClose}></div>
            <div data-aos="zoom-in-up" className="modal-container p-4 bg-base-100 rounded-lg z-50">
                <div className="fixed bottom-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="absolute w-full h-full bg-neutral opacity-80" onClick={onClose}></div>
                    <div className="modal-container p-4 bg-base-100 rounded-lg z-50">
                        <div className='text-primary'>
                            <h2 className="text-2xl font-bold mb-4">Update Booking</h2>
                            <p>Name: {booking.user.displayName}</p>
                            <p>Email: {booking.user.email}</p>
                            <p>Room: {booking.room.name}</p>
                            <p>Price: {booking.room.price} BDT</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Select New Date:</label>
                            <DatePicker
                                selected={newDate}
                                startDate={new Date()}
                                onChange={(date) => setNewDate(date)}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                            />
                            {/* <DatePicker
                                selected={newDate}
                                startDate={new Date()}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                            /> */}
                        </div>
                        <div className="flex justify-end">
                            <button className="btn btn-accent"
                             onClick={handleUpdate}
                            >Confirm</button>
                            <button className="btn btn-error" onClick={onClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

BookingUpdateModal.propTypes = {
    isOpen: PropTypes.bool.isRequired, // isOpen should be a boolean and is required.
    booking: PropTypes.object.isRequired, // image should be a string and is required.
    onClose: PropTypes.func.isRequired, // onClose should be a function and is required.
};

export default BookingUpdateModal;