import React, { Component } from "react";
import styles from "./SearchBar.module.css";
import fetchImagesWithQuery from "../../helpers/axios";

class Searchbar extends Component {
  state = {
    query: "",
  };
  onGetQuery = (e) => {
    this.setState({ query: e.target.value });
  };

  fetchQuery = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.fetchQuery}>
          <button type="submit" className={styles.SearchFormbutton}>
            <span className={styles.SearchFormbuttonlabel}>Search</span>
          </button>

          <input
            className={styles.SearchForminput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.onGetQuery}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
