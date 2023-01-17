import React, { Component } from "react";

import styles from "./LoginForm.module.scss";
import { ReactComponent as OrangeLeaf } from "./OrangeLeaf.svg";
import { ReactComponent as PurpleLeaf } from "./PurpleLeaf.svg";

const INITIAL_STATE = {
  name: "",
  email: "",
};

export default class LogInForm extends Component {
  state = { ...INITIAL_STATE };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email } = this.state;
    alert(`Name: ${name}, Email: ${email}`);
    this.reset();
  };

  render() {
    const { name, email } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Log in</h2>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={this.handleChange}
          className={styles.formInput}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={this.handleChange}
          className={styles.formInput}
        />
        <button type='submit' className={styles.btn}>
          Book a demo
        </button>

        <div className={styles.orangeLeaf}>
          <OrangeLeaf />
        </div>
        <div className={styles.purpleLeaf}>
          <PurpleLeaf />
        </div>
      </form>
    );
  }
}
