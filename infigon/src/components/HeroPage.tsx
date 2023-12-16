import React from "react";
import styles from "./HeroPage.module.css";
import Button from "./Button";

function HeroPage() {
  return (
    <>
      <header>
        <div
          className={`${styles.container} ${styles.headerSection}  ${styles.flex}`}
        >
          {/*  left header */}
          <div className={styles.headerLeft}>
            <h1>Unlock your Future with us!</h1>
            <p>
            Life Mentors to shape your career
            </p>
            {/* <a
              href="#"
              className={`${styles.primaryButton} ${styles.getStartedBtn}`}
            >
              Get Started
            </a> */}
                <Button title="Get Started"/>
          </div>
          {/*  Right Header  */}
          <div className="headerRight">
            <img
              src="https://uploads-ssl.webflow.com/63f5ff2d3827b085d542bb85/64463876b354cb6bec684731_Artboard%2031%20copy%402x%201.svg"
              alt="hero image"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroPage;
