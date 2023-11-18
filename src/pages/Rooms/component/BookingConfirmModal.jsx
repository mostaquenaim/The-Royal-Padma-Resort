import PropTypes from 'prop-types';
import { useState } from 'react';

const BookingConfirmModal = ({ isOpen, room, date, onClose, onConfirm, isEnable }) => {

    if (!isOpen) {
        return null;
    }
    return (
        <div className="fixed bottom-0 left-0 w-full h-full flex items-center justify-center z-50 text-primary">
            <div className="absolute w-full h-full bg-black opacity-80" onClick={onClose}></div>
            <div data-aos="zoom-in-up" className="modal-container p-4 bg-white rounded-lg z-50">
                <div>
                    <h2 className="text-3xl font-semibold mb-2">Room Details</h2>
                    <p><strong>Price:</strong> {room.price}</p>
                    <p><strong>Date:</strong> {date.toDateString()}</p>
                    <p><strong>Room Description:</strong> {room.description}</p>
                </div>
                <div className="mt-4">
                    <button className={`btn ${isEnable ? 'btn-primary' : 'btn-disabled'} `} onClick={onConfirm}>Confirm</button>
                    <button className="btn btn-error ml-2" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

BookingConfirmModal.propTypes = {
    isOpen: PropTypes.bool.isRequired, // isOpen should be a boolean and is required.
    room: PropTypes.shape({
        price: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired, // room should be an object with price and description properties, both required.
    date: PropTypes.instanceOf(Date).isRequired, // date should be a Date instance and is required.
    onClose: PropTypes.func.isRequired, // onClose should be a function and is required.
    onConfirm: PropTypes.func.isRequired, // onConfirm should be a function and is required.
};

export default BookingConfirmModal;
