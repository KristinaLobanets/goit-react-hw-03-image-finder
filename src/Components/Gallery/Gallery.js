import React, { Component } from "react";
import Searchbar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import fetchImagesWithQuery from "../../helpers/axios";
import Button from "../Button/button";
import Modal from "../Modal/Modal";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Spinner from "../Loader/loader";

class Gallery extends Component {
  state = {
    photos: [],
    searchQuery: "",
    page: 1,
    showModal: false,
    imageModal: "",
    loader: false,
  };

  onSubmit = (query) => {
    this.setState({ searchQuery: query, photos: [], page: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.fetchImagesLoadMore();
    }
  }

  fetchImagesLoadMore = () => {
    this.setState({ loader: true });
    fetchImagesWithQuery(this.state.searchQuery, this.state.page)
      .then((photos) =>
        this.setState((prevState) => ({
          photos: [...prevState.photos, ...photos],
          page: prevState.page + 1,
          loader: false,
        }))
      )
      .catch((error) => this.setState({ error }));
  };

  toggleModal = (largeImage) => {
    this.setState((state) => ({
      showModal: !state.showModal,
      imageModal: largeImage,
    }));
  };

  modalClose = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
      imageModal: "",
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem
            array={this.state.photos}
            toggleModal={this.toggleModal}
          />
        </ImageGallery>
        {this.state.loader && <Spinner />}
        {!!this.state.photos.length > 0 && (
          <Button onSomething={this.fetchImagesLoadMore} />
        )}
        {this.state.showModal && (
          <Modal imageModal={this.state.imageModal} onClose={this.modalClose} />
        )}
      </>
    );
  }
}
export default Gallery;
