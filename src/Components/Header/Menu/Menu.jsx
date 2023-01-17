import React from "react";
import Nav from "./Nav/Nav";
import styles from "./Menu.module.scss";
import PropTypes from 'prop-types'

const Menu = ({ menuIsOpen, btnTitle }) => {
  return (
    <div className={`${styles.menuContainer} ${menuIsOpen ? styles.showMenu : styles.hideMenu }`}>
      <Nav 
			home={'Home'}
			mission = {'Our mission'}
			places = {'Places'}
			team = {'Team'}
			/>
      <button type='button'>{btnTitle}</button>
    </div>
  );
};

Menu.propTypes  = {
	menuIsOpen: PropTypes.bool.isRequired,
	btnTitle: PropTypes.string.isRequired
}

export default Menu;

