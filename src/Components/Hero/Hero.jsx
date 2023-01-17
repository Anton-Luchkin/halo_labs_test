import React, { Component } from "react";

import Search from "./Search/Search";
import { ReactComponent as Heart } from "./img/Heart.svg";
import { ReactComponent as HeartBig } from "./img/HeartBig.svg";

import Headline from "./img/Headline.png";
import HeadlineBig from "./img/HeadlineBig.png";
import Parrot from "./img/Parrot.png";
import ParrotBig from "./img/ParrotBig.png";

import styles from "./Hero.module.scss";

export default class Hero extends Component {
  render() {
    return (
      <section className={styles.heroContainer}>
        <div className={styles.heroHeadline}>
          <img className={styles.image} src={Headline} alt='Headline' />
          <img className={styles.imageBig} src={HeadlineBig} alt='Headline' />
        </div>
        <p className={styles.heroText}>
          The scale of the challenges facing our planet can seem daunting, but
          we can all do something.
        </p>

        <Search />

        <div className={styles.parrotBox}>
          <img className={styles.parrot} src={Parrot} alt='Parrot' />
          <img className={styles.parrotBig} src={ParrotBig} alt='Parrot' />
        </div>
        <div className={styles.rectangle}>
          <div className={styles.rectangleSvg}>
            <Heart />
          </div>
          <div className={styles.rectangleSvgBig}>
            <HeartBig />
          </div>
          <div className={styles.rectangleText}>
            <p className={styles.members}>Members</p>
            <p className={styles.quantity}>29 128</p>
          </div>
        </div>
      </section>
    );
  }
}
