import { useState } from 'react';
import PropTypes from 'prop-types';
import ModalComp from './ModalComp';

const ShowImage = ({ image }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div
                className="mx-auto h-screen w-full bg-cover bg-center bg-no-repeat shadow-lg rounded-lg relative"
                style={{
                    backgroundImage: `url(${image.image_url})`,
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="group bg-opacity-0 bg-primary w-full h-full hover:bg-opacity-25 duration-500 text-center">
                    <span className="text-lg md:text-2xl lg:text-6xl text-base-100 p-3 rounded-lg border-base-100 border-2 bg-gradient-to-b from-neutral to-secondary opacity-0 group-hover:-mt-20 group-hover:opacity-100 duration-300 px-10">{image.name}</span>
                </div>
                <div className="absolute bottom-3 text-center w-full ">
                    <button className="btn px-5"
                        onClick={openModal}
                    >
                        View
                    </button>
                </div>
            </div>
            <ModalComp isOpen={isModalOpen} image={image.image_url} onClose={closeModal} />
        </>
    );
};

ShowImage.propTypes = {
    image: PropTypes.object.isRequired, // isOpen should be a boolean and is required.
};

export default ShowImage;
