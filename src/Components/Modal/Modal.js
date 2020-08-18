import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  render() {
    return (
      // <></>
      <div className={styles.Overlay} alt="">
        <div className={styles.Modal}>
          <img src={this.props.largeImageURL} />
        </div>
      </div>
    );
  }
}
export default Modal;
