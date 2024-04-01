import { useState } from "react";

import { fetchPhoto } from "../../photo-api.js";

import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn.jsx";
import SearchBar from "../searchBar/SearchBar.jsx";
import ImageGallery from "../imageGallery/ImageGallery.jsx";
import Loader from "../loader/Loader.jsx";
import ErrorMessage from "../errorMessage/ErrorMessage.jsx";
import ImageModal from "../imageModal/ImageModal.jsx";

import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const request = form.elements[1].value;
    onSearch(request, page);
    form.reset();
  };

  const onSearch = async (request, page) => {
    try {
      setLoader(true);
      const data = await fetchPhoto(request, page);
      setImages(...images, data.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const onLoadMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && <LoadMoreBtn onClick={onLoadMore} />}
      <div className="loader">{loader && <Loader />}</div>
      {errorMessage && <ErrorMessage />}
      <ImageModal />
    </div>
  );
}

export default App;
