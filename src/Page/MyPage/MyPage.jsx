import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Navigator from "../../Component/Navigator";
import TextShow from "../../Component/TextShow";
import styles from "./MyPage.module.scss";

class MyPage extends React.Component {
  render() {
    return (
      <div>
        <Navigator />
        <TextShow />
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
