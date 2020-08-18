import React from "react";
import styles from "./imageGalleryItem.module.css";

const ImageGalleryItem = ({ array = [], toggleModal }) => {
  return (
    <>
      {array.map((item) => (
        <li
          onClick={() => {
            toggleModal(item.largeImageURL);
          }}
          key={item.id}
          className={styles.ImageGalleryItem}
        >
          <img
            src={item.webformatURL}
            alt={item.webformatURL}
            className={styles.ImageGalleryItemimage}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
