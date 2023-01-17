import React, { Component } from "react";
import { ReactComponent as Marker } from "./Marker.svg";

import styles from "./Search.module.scss";

export default class Search extends Component {
  state = {
    searchValue: "",
  };

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Do you want to help ${this.state.searchValue}?`);

		this.setState({ searchValue: ""});
  };

  render() {
    const { searchValue } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.searchForm}>
        <div className={styles.searchMarker}>
          <Marker />
        </div>

        <input
          type='text'
          placeholder='Find the place to help'
          value={searchValue}
          onChange={this.handleChange}
					className={styles.searchText}
        />

        <button type='submit' className={styles.searchBtn}>search</button>
      </form>
    );
  }
}
