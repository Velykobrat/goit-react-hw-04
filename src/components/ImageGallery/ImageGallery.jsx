import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css'; // Імпортуємо стилі

const ImageGallery = ({ images, onImageClick }) => {
    return (
        <ul className={styles.gallery}> {/* Додаємо клас стилів для галереї */}
            {images.map(image => (
                <li key={image.id}>
                    <ImageCard image={image} onClick={() => onImageClick(image)} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;