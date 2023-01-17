import React from "react";
import { ReactComponent as Plus } from "./plus.svg";
import { ReactComponent as Minus } from "./minus.svg";
import styles from "./FAQsList.module.scss";

const FAQsList = ({ FAQsItems, onClickBtn, activeFAQ }) => {
  return (
    <ul className={styles.container}>
      {FAQsItems.map((FAQsItem, index) => (
        <li key={FAQsItem.title} className={styles.listItem}>
          <div className={styles.wrapper}>
            <h3 className={styles.listItemTitle}>{FAQsItem.title}</h3>
            <button
              onClick={() => onClickBtn(index)}
              className={styles.listItemBtn}
            >
              {index === activeFAQ ? <Minus /> : <Plus />}
            </button>
          </div>
          {index === activeFAQ && (
            <p className={styles.listItemText}>{FAQsItem.text}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FAQsList;
