import React, { Component } from "react";
import TextLoop from "react-text-loop";
import styles from "./IntroText.module.scss";
import { history } from "../../Redux/Helper";

class IntroText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current_bg: 0,
    };
  }

  unsplash_ids = ["1477244075012-5cc28286e465", "1500462918059-b1a0cb512f1d", "1580428180163-76ab1efe2aed"];

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
        <h1 className={styles.outer}>
          <div className={styles.aux} style={{ backgroundImage: `url(${bg_urls[this.state.current_bg]})` }}>
            <div className={styles.offset}>
              <span className={styles.prefix}>{`Call me a`}</span>
              <TextLoop className={styles.TextLoop} mask={false}>
                <div className={styles.a1}>Full-stack developer</div>
                <div className={styles.a2}>UI/UX designer</div>
                <div className={styles.a3}>game enthusiast</div>
              </TextLoop>
            </div>
          </div>
        </h1>
      </div>
    );
  }
}

export default IntroText;
