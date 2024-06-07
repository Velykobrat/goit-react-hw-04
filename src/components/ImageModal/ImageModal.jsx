// src/components/ImageModal/ImageModal.jsx
import PropTypes from 'prop-types';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, image }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Image Modal"
        >
            <div onClick={onClose}>
                <img src={image.urls.regular} alt={image.alt_description} />
            </div>
        </Modal>
    );
};

ImageModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    image: PropTypes.object,
};

export default ImageModal;
