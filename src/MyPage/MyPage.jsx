import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CoolCaption from "../_components/CoolCaption";
import TextShow from "../_components/TextShow";
import styles from "./MyPage.module.scss";

class MyPage extends React.Component {
  render() {
    return (
      <div>
        <TextShow />
        {/*<CoolCaption />*/}
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
