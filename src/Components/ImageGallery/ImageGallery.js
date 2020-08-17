import React, { Component } from "react";
import styles from "./ImageGallery.module.css";
import SearchBar from "../SearchBar/SearchBar";

class ImageGallery extends Component {
  state = {};
  render() {
    const {} = this.state;
    return (
      <>
        <ul className={styles.ImageGallery}></ul>
        <SearchBar />
      </>
    );
  }
}
export default ImageGallery;
