import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ShowTestimonial = ({ review }) => {
    return (
        <div className="w-full max-w-md mx-auto bg-base-100 shadow-lg shadow-accent rounded-lg p-4 text-center">
            <div className="text-3xl text-gray-600 mb-4">
                <FaQuoteLeft />
            </div>
            <p className="text-lg text-gray-700 mb-4">
                {review.comment}
            </p>
            <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                        src={review.user.photoURL}
                        alt={review.user.displayName}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="ml-4">
                    <h2 className="text-lg text-gray-800 font-semibold">
                        {review.user.displayName}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default ShowTestimonial;
