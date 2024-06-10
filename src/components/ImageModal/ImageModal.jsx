// src/components/ImageModal/ImageModal.jsx
import PropTypes from 'prop-types';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, image }) => {
    // Обчислюємо ширину та висоту модального вікна
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const imageWidth = image.width;
    const imageHeight = image.height;
    const maxWidth = windowWidth - 40; // 40px відступи від країв вікна
    const maxHeight = windowHeight - 40;

    // Визначаємо, яка сторона має бути обмежена розміром
    const aspectRatio = imageWidth / imageHeight;
    let modalWidth, modalHeight;
    if (aspectRatio > 1) {
        modalWidth = Math.min(maxWidth, imageWidth);
        modalHeight = modalWidth / aspectRatio;
    } else {
        modalHeight = Math.min(maxHeight, imageHeight);
        modalWidth = modalHeight * aspectRatio;
    }

    // Стилі для модального вікна
    const modalStyles = {
        content: {
            width: `${modalWidth}px`,
            height: `${modalHeight}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: 0,
            border: 'none',
            background: 'none',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Image Modal"
            style={modalStyles} // Встановлюємо стилі модального вікна
        >
            <div onClick={onClose}>
                <img src={image.urls.regular} alt={image.alt_description} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
