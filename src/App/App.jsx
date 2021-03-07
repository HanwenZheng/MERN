import React from "react"; // noinspection ES6CheckImport
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../Redux/Helper";
import { alertActions } from "../Redux/Actions";
import MyPage from "../Page/MyPage/MyPage";
import HomePage from "../Page/HomePage";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen(() => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <Router history={history}>
              <Switch>
                <Route exact path="/" component={MyPage} />
                <Route path="/home" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
