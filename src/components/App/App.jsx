// src/App.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

const API_KEY = 'BalC9pYc4FBrCsIKEVlYs4A4XHBdSRUlwmaFEmdpm9I';
const BASE_URL = 'https://api.unsplash.com/search/photos';

function App() {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (!query) return;

        const fetchImages = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`${BASE_URL}`, {
                    params: {
                        query,
                        page,
                        per_page: 12,
                        client_id: API_KEY,
                    },
                });

                setImages(prevImages => [...prevImages, ...response.data.results]);
            } catch (error) {
                setError('Failed to fetch images');
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [query, page]);

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        setImages([]);
        setPage(1);
    };

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    return (
        <div>
            <h1>Image Search App</h1>
            <SearchBar onSubmit={handleSearch} />
            {error && <ErrorMessage message={error} />}
            <ImageGallery images={images} onImageClick={openModal} />
            {loading && <Loader />}
            {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
            {showModal && <ImageModal image={selectedImage} onClose={closeModal} />}
            <Toaster />
        </div>
    );
}

export default App;
