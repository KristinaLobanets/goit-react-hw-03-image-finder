import React from "react";
import styles from "./imageGalleryItem.module.css";

const ImageGalleryItem = ({ array = [], toggleModalWin }) => {
  return (
    <>
      {array.map((item) => (
        <li
          onClick={() => {
            toggleModalWin(item.largeImageURL);
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
