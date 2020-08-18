import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    console.dir(e.target);
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={styles.Overlay} alt="">
        <div className={styles.Modal}>
          <img src={this.props.imageModal} />
        </div>
      </div>
    );
  }
}
export default Modal;
