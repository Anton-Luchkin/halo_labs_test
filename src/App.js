import React, { Component } from "react";
import styles from "./App.module.scss";

import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import LogIn from "./Components/LogIn/LogIn";
import Team from "./Components/Team/Team";
import FAQs from "./Components/FAQs/FAQs";
import Carousel from "./Components/Slider/Slider";
import Footer from "./Components/Footer/Footer";

export default class App extends Component {
  render() {
    return (
      <Container>
        <div className={styles.headerHeroWrapper}>
          <Header />
          <Hero />
        </div>
        <Team />
        <LogIn />
        <FAQs />
				<Carousel/>
				<Footer/>
      </Container>
    );
  }
}
