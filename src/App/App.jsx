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
import styles from "./App.module.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen(() => {
      // clear alert on location change
      this.props.clearAlerts();
    });

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
      <div className={styles.aux} style={{ backgroundImage: `url(${bg_urls[this.state.current_bg]})` }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <Navigator />
              <div className="jumbotron" style={{ background: "none" }}>
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
