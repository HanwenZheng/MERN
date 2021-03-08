import React, { Component } from "react";
import TextLoop from "react-text-loop";
import styles from "./IntroText.module.scss";
import { history } from "../../Redux/Helper";
import ReactTypingEffect from "react-typing-effect";

class IntroText extends Component {
  ReactTypingEffectDemo = () => {
    return (
      <ReactTypingEffect
        className={styles.RTE}
        text={["Call me a ..."]}
        speed={150}
        eraseSpeed={50}
        typingDelay={1000}
        eraseDelay={3000}
      />
    );
  };

  constructor(props) {
    super(props);

    this.state = {
      current_bg: 0,
    };
  }

  unsplash_ids = ["1601714582667-574b826b99a6", "1500462918059-b1a0cb512f1d", "1559828801-04565cd31e27"];

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
        <div className={styles.aux} style={{ backgroundImage: `url(${bg_urls[this.state.current_bg]})` }} />
        <h1 className={styles.outer}>
          <span className={styles.prefix}>{`Call me a`}</span>
          {this.ReactTypingEffectDemo()}
          <TextLoop className={styles.TextLoop} mask={false}>
            <div className={styles.a1}>Full-stack developer</div>
            <div className={styles.a2}>UI/UX designer</div>
            <div className={styles.a3}>game enthusiast</div>
          </TextLoop>
        </h1>
      </div>
    );
  }
}

export default IntroText;
