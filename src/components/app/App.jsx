import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements[1].value;
    setQuery(query);
    setPage(1);
    setImages([]);

    if (query === '') {
      notification();
      return;
    }
  };

  useEffect(() => {
    const load = async () => {
      try {
        setLoader(true);
        const data = await fetchPhoto(query, page);
        const results = data.data.results;
        console.log(data.data.total_pages);

        if (data.data.total_pages && data.data.total_pages !== page) {
          setShowBtn(true);
        } else {
          setShowBtn(false);
        }

        setImages([...images, ...results]);
        return;
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setLoader(false);
      }
    };
    load();
  }, [query, page]);

  const notification = () => toast.warn('Для пошуку введіть щось!', { theme: 'colored' });

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
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} openModal={openModal} />}
      {showBtn && <LoadMoreBtn hendleLoadMore={hendleLoadMore} />}
      <div className="loader">{loader && <Loader />}</div>
      {errorMessage && <ErrorMessage />}
      <ImageModal regular={regular} modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <ToastContainer />
    </div>
  );
}

export default App;
