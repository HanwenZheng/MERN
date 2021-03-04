import React, { Component } from "react";
import TextLoop from "react-text-loop";
import styles from "./TextShow.module.scss";

class TextShow extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.center}>
          <span className={styles.prefix}>{`Call me a`}</span>
          <TextLoop className={styles.TextLoop} mask={false}>
            <div>Full-stack Developer</div>
            <div>UI/UX Designer</div>
            <div>Game Lover</div>
          </TextLoop>
        </h1>
      </div>
    );
  }
}

export default TextShow;
