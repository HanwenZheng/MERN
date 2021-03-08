import React, { Component } from "react";
import TextLoop from "react-text-loop";
import ReactTypingEffect from "react-typing-effect";
import styles from "./IntroText.module.scss";

class IntroText extends Component {
  ReactTypingEffectDemo = () => {
    return (
      <ReactTypingEffect
        className={styles.RTE}
        text={["Call me a ..."]}
        speed={150}
        eraseSpeed={50}
        typingDelay={1000}
        eraseDelay={5000}
      />
    );
  };

  constructor(props) {
    super(props);

    this.state = {
      current_bg: 0,
    };
  }

  unsplash_ids = ["1601714582667-574b826b99a6", "1500462918059-b1a0cb512f1d", "1511739001486-6bfe10ce785f"];

  componentDidMount() {
    setInterval(() => {
      this.setState({
        current_bg: this.state.current_bg === this.unsplash_ids.length - 1 ? 0 : this.state.current_bg + 1,
      });
    }, 3000);
  }

  render() {
    const bg_urls = this.unsplash_ids.map((el) => {
      return `https://images.unsplash.com/photo-${el}`;
    });

    return (
      <div>
        <div className={styles.bgImg} style={{ backgroundImage: `url(${bg_urls[this.state.current_bg]})` }} />
        <h1 className={styles.outer}>
          <span className={styles.prefix}>{`Call me a`}</span>
          {this.ReactTypingEffectDemo()}
          <TextLoop className={styles.TextLoop}>
            <div className={styles.a1}>Full-stack developer</div>
            <div className={styles.a2}>UI/UX designer</div>
            <div className={styles.a3}>Systems architect</div>
          </TextLoop>
        </h1>
      </div>
    );
  }
}

export default IntroText;
