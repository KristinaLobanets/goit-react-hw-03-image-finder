import React from "react";
import styles from "./imageGalleryItem.module.css";

const ImageGalleryItem = ({ array = [] }) => {
  return (
    <>
      {array.map((item) => (
        <li key={item.id} className={styles.ImageGalleryItem}>
          <img
            src={item.webformatURL}
            alt={item.largeImageURL}
            className={styles.ImageGalleryItemimage}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
