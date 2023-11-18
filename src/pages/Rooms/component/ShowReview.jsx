const ShowReview = ({ review }) => {
    const { user, rating, comment, timestamp } = review;

    // Function to format the timestamp as a string
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString(); // You can customize the date format further if needed
    };

    return (
        <div className="bg-base-100 p-4 rounded  mb-4">
            <div className="flex items-center mb-2">
                <div className="flex-shrink-0">
                    <img
                        className="h-8 w-8 rounded-full"
                        src={user.photoURL}
                        alt={user.displayName}
                    />
                </div>
                <div className="ml-2">
                    <div className="text-lg font-semibold text-primary">{user.displayName}</div>
                    <div className=" text-sm text-primary">{formatTimestamp(timestamp)}</div>
                </div>
            </div>
            <div className="text-primary text-opacity-70 text-base mb-2">{comment}</div>
            <div className="text-yellow-500">
                Rating: {rating}
            </div>
        </div>
    );
};

export default ShowReview;
