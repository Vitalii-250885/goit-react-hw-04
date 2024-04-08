import { useState } from 'react';
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

  const notification = () => toast('Для пошуку введіть щось');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements[1].value;
    if (query === '') {
      notification();
      return;
    }
    onSearch(query, page);
  };

  const onSearch = async (query, page) => {
    try {
      setLoader(true);
      const data = await fetchPhoto(query, page);
      const results = data.data.results;
      console.log(data);
      setImages([...images, ...results]);
      setPage(page + 1);
      return;
    } catch (error) {
      setErrorMessage(true);
    } finally {
      setLoader(false);
    }
  };

  const openModal = regular => {
    setRegular(regular);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} openModal={openModal} />}
      {images.length > 0 && <LoadMoreBtn handleSubmit={handleSubmit} />}
      <div className="loader">{loader && <Loader />}</div>
      {errorMessage && <ErrorMessage />}
      <ImageModal regular={regular} modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
