import React, { Component } from "react";
import styles from "./loader.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";
class Loader extends Component {
  render() {
    return <Loader type="Oval" color="#00BFFF" height={80} width={80} />;
  }
}
export default Loader;
