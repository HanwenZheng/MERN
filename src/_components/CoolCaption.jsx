import React from "react";

import "./CoolCaption.css";
import { Button } from "react-bootstrap";

class CoolCaption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [1, 2, 3],
      current: 0,
      show: false,
    };
  }

  componentDidMount() {
    if (!this.state.show) {
      this.setState({ show: true });
    }
  }

  btnClickHandler = () => {
    setInterval(() => {
      switch (this.state.current) {
        case this.state.words.length - 1:
          this.setState({ current: 0 });
          break;
        default:
          this.setState({ current: this.state.current + 1 });
      }
    }, 1000);
  };

  render() {
    return (
      <div className="CoolCaption">
        {this.state.show && <h1>{this.state.words[this.state.current]}</h1>}
        <Button variant="warning" onClick={this.btnClickHandler}>
          begin
        </Button>
      </div>
    );
  }
}

export default CoolCaption;
