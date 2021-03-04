import React from "react";
// noinspection ES6CheckImport
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { MyPage } from "../MyPage";
import Navigator from "../_components/Navigator";
// import { PrivateRoute } from "../_components";
// import { HomePage } from "../HomePage";
// import { LoginPage } from "../LoginPage";
// import { RegisterPage } from "../RegisterPage";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen(() => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        <Navigator />
        <div className="jumbotron" style={{ backgroundColor: "rgb(0,0,0)" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10">
                {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
                <Router history={history}>
                  <Switch>
                    <Route exact path="/" component={MyPage} />
                    <Redirect from="*" to="/" />
                  </Switch>
                </Router>
              </div>
            </div>
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
