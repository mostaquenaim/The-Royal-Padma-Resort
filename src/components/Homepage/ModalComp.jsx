import PropTypes from 'prop-types';

const ModalComp = ({ isOpen, image, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="absolute w-full h-full bg-black opacity-80" onClick={onClose}></div>
            <div data-aos="zoom-in-up" className="modal-container p-4 bg-white rounded-lg z-50">
                <img src={image} alt="Modal" className='max-h-[600px] max-w-full' />
                {/* <button onClick={onClose}>Close</button> */}
            </div>
        </div>
    );
};

ModalComp.propTypes = {
    isOpen: PropTypes.bool.isRequired, // isOpen should be a boolean and is required.
    image: PropTypes.string.isRequired, // image should be a string and is required.
    onClose: PropTypes.func.isRequired, // onClose should be a function and is required.
};

export default ModalComp;
