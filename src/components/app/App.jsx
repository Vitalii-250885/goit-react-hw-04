// import { useState } from 'react'

import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../searchBar/SearchBar";
import ImageGallery from "../imageGallery/ImageGallery";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import ImageModal from "../imageModal/ImageModal";

import "./App.css";

function App() {
  return (
    <>
      <LoadMoreBtn />
      <SearchBar />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <ImageModal />
    </>
  );
}

export default App;
