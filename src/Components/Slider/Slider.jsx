import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Slider.module.scss";

import mainCard from "./img/card-main.png";
import firstCard from "./img/card_1.png";
import secondCard from "./img/card_2.png";
import thirdCard from "./img/card_3.png";
import fourthCard from "./img/card_4.png";
import mainCardBig from "./img/card-main-big.png";
import firstCardBig from "./img/card_1-big.png";
import secondCardBig from "./img/card_2-big.png";
import thirdCardBig from "./img/card_3-big.png";
import fourthCardBig from "./img/card_4-big.png";
import { ReactComponent as ChevronLeft } from "./img/ChevronLeft.svg";
import { ReactComponent as ChevronRight } from "./img/ChevronRight.svg";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  state = {
    counter: 1,
  };

  next() {
    this.slider.slickNext();
    this.setState((state) => {
      if (this.state.counter < 5) {
        return { counter: state.counter + 1 };
      } else {
        return { counter: 1 };
      }
    });
  }
  previous() {
    this.slider.slickPrev();
    this.setState((state) => {
      if (this.state.counter > 1) {
        return { counter: state.counter - 1 };
      } else {
        return { counter: 5 };
      }
    });
  }

  render() {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={styles.container}>
        <Slider
          className={styles.slider}
          ref={(c) => (this.slider = c)}
          {...settings}
        >
          <div key={1}>
            <img
              className={styles.image}
              src={mainCard}
              alt='Save watter'
            ></img>
            <img
              className={styles.imageBig}
              src={secondCardBig}
              alt='Choose organic'
            ></img>
          </div>
          <div key={2}>
            <img
              className={styles.image}
              src={thirdCard}
              alt='Plant trees'
            ></img>

            <img
              className={styles.imageBig}
              src={mainCardBig}
              alt='Save watter'
            ></img>
          </div>
          <div key={3}>
            <img
              className={styles.image}
              src={fourthCard}
              alt='Save energy'
            ></img>

            <img
              className={styles.imageBig}
              src={thirdCardBig}
              alt='Plant trees'
            ></img>
          </div>
          <div key={4}>
            <img
              className={styles.image}
              src={firstCard}
              alt='Avoid plastic'
            ></img>

            <img
              className={styles.imageBig}
              src={fourthCardBig}
              alt='Save energy'
            ></img>
          </div>
          <div key={5}>
            <img
              className={styles.image}
              src={secondCard}
              alt='Choose organic'
            ></img>

            <img
              className={styles.imageBig}
              src={firstCardBig}
              alt='Avoid plastic'
            ></img>
          </div>
        </Slider>
        <div className={styles.buttonContainer} style={{ textAlign: "center" }}>
          <button className={styles.button} onClick={this.previous}>
            <ChevronLeft />
          </button>
          <p>
            {this.state.counter}
            <span> / 5</span>
          </p>
          <button className={styles.button} onClick={this.next}>
            <ChevronRight />
          </button>
        </div>
      </div>
    );
  }
}
