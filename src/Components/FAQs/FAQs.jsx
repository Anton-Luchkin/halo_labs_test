import React, { Component } from "react";
import styles from "./FAQs.module.scss";
import FAQsList from "./FAQsList/FAQsList";

import FAQsItems from "./FAQsList/FAQsItems.json";

export default class FAQs extends Component {
  state = {
    activeFAQ: null,
  };

  activeFAQ = (index) => {
    if (index === this.state.activeFAQ) {
      return this.setState({ activeFAQ: null });
    }

    this.setState({ activeFAQ: index });
  };

  render() {
    return (
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Ready to Get started?</h2>
          <p className={styles.text}>
            When pattern is mentioned in interior design, it is easy to asso-
            ciate it with a geometric patterned wallpaper or colourful prints on
            interior fabrics.
          </p>
          <button className={styles.btn} type='button'>
            Contact us
          </button>
        </div>
        <FAQsList
          FAQsItems={FAQsItems}
          onClickBtn={this.activeFAQ}
          activeFAQ={this.state.activeFAQ}
        />
      </section>
    );
  }
}
