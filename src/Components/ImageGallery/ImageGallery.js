import React, { Component } from "react";
import styles from "./ImageGallery.module.css";

class ImageGallery extends Component {
  state = {};

  render() {
    const {} = this.state;
    if (error) {
      return <h1>Woops, something went wrong. Try again later!</h1>;
    }
    return (
      <>
        <Searchbar />
        <ImageGalleryItem />
        <Button />
        <Modal />
      </>
    );
  }
}

export default ImageGallery;
