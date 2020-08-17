import React, { Component } from "react";
import styles from "./loader.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class loader extends Component {
  state = {
    articles: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get("https://hn.algolia.com/api/v1/search?query=react")
      .then((response) => {
        this.setState({
          articles: response.data.hits,
          isLoading: false,
        });
      });
  }

  render() {
    const { articles, isLoading } = this.state;

    return isLoading ? <p>Loading...</p> : <ArticleList articles={articles} />;
  }
}

export default loader;
