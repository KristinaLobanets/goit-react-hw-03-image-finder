import React, { Component } from "react";
import { render } from "@testing-library/react";
import Searchbar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import fetchImagesWithQuery from "../../helpers/axios";
import Button from "../Button/button";
import Modal from "../Modal/Modal";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Gallery extends Component {
  state = {
    photos: [],
    searchQuery: "",
    page: 1,
    showModal: false,
    imageModal: "",
  };

  onSubmit = (query) => {
    this.setState({ searchQuery: query });
  };

  fetchContent = () => {
    fetchImagesWithQuery(this.state.searchQuery).then((res) => {
      this.setState((prevState) => ({
        photos: [...prevState.photos, ...res],
      }));
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.fetchContent();
    }
  }

  fetchImagesLoadMore = () => {
    fetchImagesWithQuery(this.state.searchQuery, this.state.page)
      .then((photos) =>
        this.setState((prevState) => ({
          photos: [...prevState.photos, ...photos],
          page: prevState.page + 1,
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

  modalClose = () => {};

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem array={this.state.photos} />
        </ImageGallery>

        {!!this.state.photos.length > 0 && (
          <Button onSomething={this.fetchImagesLoadMore} />
        )}
        <Modal
          toggleModal={this.toggleModal}
          imageModal={largeImageURL}
          onClose={this.modalClose}
        />
      </>
    );
  }
}
export default Gallery;
