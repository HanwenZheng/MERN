import React, { Component } from "react";
import TextLoop from "react-text-loop";
import styles from "./TextShow.module.scss";

class TextShow extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.outer}>
          <span className={styles.prefix}>{`Call me a`}</span>
          <TextLoop className={styles.TextLoop} mask={false}>
            <div className={styles.a1}>Full-stack Developer</div>
            <div className={styles.a2}>UI/UX Designer</div>
            <div className={styles.a3}>Game Lover</div>
          </TextLoop>
        </h1>
      </div>
    );
  }
}

export default TextShow;
