import React, { Component } from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import { ReactComponent as Union } from "./Union.svg";
import { ReactComponent as IconClose } from "./icon-close.svg";
import styles from "./Header.module.scss";

export default class Header extends Component {
  state = {
    menuIsOpen: false,
  };

  toggle = () => {
    this.setState((state) => ({ menuIsOpen: !state.menuIsOpen }));
  };

  render() {
    const { menuIsOpen } = this.state;

    return (
      <header className={styles.headerContainer}>
        <Logo />
        <Menu menuIsOpen={menuIsOpen} btnTitle={"Apply"} />
        {menuIsOpen ? (
          <button className={styles.menuBtn} onClick={this.toggle}>
            <IconClose />
          </button>
        ) : (
          <button className={styles.menuBtn} onClick={this.toggle}>
            <Union />
          </button>
        )}
      </header>
    );
  }
}
