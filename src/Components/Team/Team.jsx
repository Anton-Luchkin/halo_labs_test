import React from "react";
import styles from "./Team.module.scss";

import firstEmployee from "./img/firstEmployee.png";
import firstVector from "./img/firstVector.png";
import secondEmployee from "./img/secondEmployee.png";
import secondVector from "./img/secondVector.png";
import thirdEmployee from "./img/thirdEmployee.png";
import firstEmployeeBig from "./img/firstEmloyeeBig.png";
import firstVectorBig from "./img/firstVectorBig.png";
import secondEmployeeBig from "./img/secondEmployeeBig.png";
import secondVectorBig from "./img/secondVectorBig.png";
import thirdEmployeeBig from "./img/thirdEmployeeBig.png";

function Team() {
  return (
    <section className={styles.teamContainer}>
      <h2 className={styles.title}>Our top team</h2>
      <p className={styles.text}>
        Learn more about how you can save our planet's nature.{" "}
      </p>
      <div className={styles.imgContainer}>
        <img
          className={styles.firstEmployee}
          src={firstEmployee}
          alt='firstEmploe'
        />
        <img
          className={styles.firstVector}
          src={firstVector}
          alt='firstVector'
        />
        <img
          className={styles.secondEmployee}
          src={secondEmployee}
          alt='secondEmploy'
        />
        <img
          className={styles.secondVector}
          src={secondVector}
          alt='secondVector'
        />
        <img
          className={styles.thirdEmployee}
          src={thirdEmployee}
          alt='firstEmploe'
        />
      </div>
			<div className={styles.imgContainerBig}>
        <img
          className={styles.firstEmployeeBig}
          src={firstEmployeeBig}
          alt='firstEmploe'
        />
        <img
          className={styles.firstVectorBig}
          src={firstVectorBig}
          alt='firstVector'
        />
        <img
          className={styles.secondEmployeeBig}
          src={secondEmployeeBig}
          alt='secondEmploy'
        />
        <img
          className={styles.secondVectorBig}
          src={secondVectorBig}
          alt='secondVector'
        />
        <img
          className={styles.thirdEmployeeBig}
          src={thirdEmployeeBig}
          alt='firstEmploe'
        />
      </div>
    </section>
  );
}

export default Team;
