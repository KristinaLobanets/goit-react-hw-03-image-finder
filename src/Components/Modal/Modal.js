import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("click", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("click", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape" || e.target.nodeName !== "IMG") {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={styles.Overlay} alt="">
        <div className={styles.Modal}>
          <img src={this.props.imageModal} alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;
