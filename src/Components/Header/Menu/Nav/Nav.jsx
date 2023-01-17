/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Nav.module.scss";
import PropTypes from "prop-types";

const Nav = ({ home, mission, places, team }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <a href='#'>{home}</a>
        </li>
        <li>
          <a href='#'>{mission}</a>
        </li>
        <li>
          <a href='#'>{places}</a>
        </li>
        <li>
          <a href='#'>{team}</a>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  home: PropTypes.string.isRequired,
  mission: PropTypes.string.isRequired,
  places: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
};

export default Nav;
