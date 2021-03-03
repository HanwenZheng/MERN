import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CoolCaption from "../_components/CoolCaption";

class MyPage extends React.Component {
  render() {
    return (
      <div>
        <div>Hello World!</div>
        <CoolCaption />
      </div>
    );
  }
}

function mapState(state) {
  return state; // to-do: maybe dumb
}

const actionCreators = {};

const connectedMyPage = connect(mapState, actionCreators)(MyPage);
export { connectedMyPage as MyPage };
