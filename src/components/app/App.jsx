import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { fetchPhoto } from '../../api/photo-api.js';

import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn.jsx';
import SearchBar from '../searchBar/SearchBar.jsx';
import ImageGallery from '../imageGallery/ImageGallery.jsx';
import Loader from '../loader/Loader.jsx';
import ErrorMessage from '../errorMessage/ErrorMessage.jsx';
import ImageModal from '../imageModal/ImageModal.jsx';

import './App.css';

function App() {
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [images, setImages] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [regular, setRegular] = useState('');
  const [showBtn, setShowBtn] = useState(false);

  const [query, setQuery] = useState('');

  const handleUpdatePage = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const load = async (query, page) => {
    try {
      setLoader(true);
      const data = await fetchPhoto(query, page);
      const results = data.data.results;

      setShowBtn(data.data.total_pages && data.data.total_pages !== page);

      setImages([...images, ...results]);
      return;
    } catch (error) {
      setErrorMessage(true);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    load(query, page);
    console.log(query, page);
  }, [query, page]);

  const openModal = regular => {
    setRegular(regular);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const hendleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="container">
      <SearchBar handleUpdatePage={handleUpdatePage} />
      {images.length > 0 && <ImageGallery images={images} openModal={openModal} />}
      {showBtn && <LoadMoreBtn hendleLoadMore={hendleLoadMore} />}
      <div className="loader">{loader && <Loader />}</div>
      {errorMessage && <ErrorMessage />}
      <ImageModal regular={regular} modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
