import React from "react";
import styles from "./imageGalleryItem.module.css";

const ImageGalleryItem = ({ array = [], toggleModalWin }) => {
  return (
    <>
      {array.map((item) => (
        <li key={item.id} className={styles.ImageGalleryItem}>
          <img
            src={item.webformatURL}
            alt={item.webformatURL}
            className={styles.ImageGalleryItemimage}
            onClick={() => {
              toggleModalWin(item.largeImageURL);
            }}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
