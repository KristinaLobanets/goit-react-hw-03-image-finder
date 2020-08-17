import React, { Component } from "react";
import { render } from "@testing-library/react";
import Searchbar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGalleryItem/ImageGalleryItem";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import fetchImagesWithQuery from "../../helpers/axios";

class Gallery extends Component {
  state = {
    photos: [],
    searchQuery: "",
    page: 1,
  };

  onSubmit = (query) => {
    this.setState({ searchQuery: query });
  };

  fetchContent = () => {
    fetchImagesWithQuery(this.state.searchQuery);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
      </>
    );
  }
}
export default Gallery;
