import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RoomDetails = ({ room }) => {
    const { name, price, description, roomSize, specialOffer, images, featuredImage, _id } = room;

    return (
        <Link to={`/room-details/${_id}`} className="">
            <figure className='group relative w-full scale-105 hover:scale-100 duration-700transform transition ease-in-out rounded-lg duration-500'>
                <img className='rounded-lg' src={featuredImage} alt={name} />
                <div className='absolute h-full inset-0 bg-neutral bg-opacity-30 group-hover:bg-opacity-60 space-x-5 justify-center items-center text-center duration-700'>
                    <div className='px-5 text-[8px] md:text-xs lg:text-base opacity-0 bottom-0 h-full w-full group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 md:translate-y-16 lg:translate-y-48 duration-700'>
                        <h1 className='font-semibold text-[12px] md:text-sm lg:text-lg'>{name}</h1>
                        <p className='opacity-70'>{description}</p>
                        <p className='opacity-70'>৳{price} per night</p>
                        <p className='opacity-80'>{specialOffer && specialOffer}</p>
                    </div>
                </div>
            </figure>

        </Link>
    );
};

RoomDetails.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        roomSize: PropTypes.string.isRequired,
        specialOffer: PropTypes.string,
        featuredImage: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default RoomDetails;
