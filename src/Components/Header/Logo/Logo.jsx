/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ReactComponent as LogoIcon } from "./Logo.svg";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href='#' className={styles.logoLink}>
        <LogoIcon />
      </a>
    </div>
  );
};

export default Logo;
