import React from "react";
import styles from "./Footer.module.scss";

import { ReactComponent as Twitter } from "./Twitter.svg";
import { ReactComponent as Facebook } from "./Facebook.svg";
import { ReactComponent as LinkedIn } from "./LinkedIn.svg";

function Footer() {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.contacts}>
        <h2>Contacts</h2>
        <p>
          2019 Rootz Foundation. <span>All rights reserved</span>
        </p>
      </div>
      <div className={styles.headquarters}>
        <h3>Headquarters</h3>
        <address>
          1234 Taliban <br />
          Los Angeles, La <br />
          1234567 <br />
          (123) 456-7890
        </address>
      </div>
      <div className={styles.social}>
        <h2>Social media</h2>
        <ul>
          <li>
            <a href='https://twitter.com/'>
              <Twitter />
            </a>
          </li>
          <li>
            <a href='https://facebook.com/'>
              <Facebook />
            </a>
          </li>
          <li>
            <a href='https://linkedIn.com/'>
              <LinkedIn />
            </a>
          </li>
        </ul>{" "}
      </div>
    </section>
  );
}

export default Footer;
