import React, { Component } from "react";

import styles from "./LogIn.module.scss";
import LogInForm from "./LogInForm/LogInForm";

export class LogIn extends Component {
  render() {
    return (
      <section className={styles.logInContainer}>
        <div className={styles.loginWrapper}>
          <div>
            <h2 className={styles.title}>Get started today!</h2>
            <p className={styles.text}>
              Learn more about how you can save our planet's nature. From smart
              consumption to switching to renewable energy, each of us can do
              our part to save the planet.
            </p>
          </div>
          <LogInForm />
        </div>
      </section>
    );
  }
}

export default LogIn;
            