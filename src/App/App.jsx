import React from "react"; // noinspection ES6CheckImport
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ImagesLoaded from "react-images-loaded";
import { ProgressBar } from "react-bootstrap";

import { history } from "../Redux/Helper";
import { alertActions } from "../Redux/Actions";
import MyPage from "../Page/MyPage/MyPage";
import HomePage from "../Page/HomePage";
import styles from "./App.module.scss";
import Cool from "../helper/CoolEmoji";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen(() => {
      // clear alert on location change
      this.props.clearAlerts();
    });

    this.state = {
      loaded: [],
      finishLoad: false,
    };
  }

  preloadNums = 3;

  handleOnProgress = (instance, image) => {
    this.setState({ loaded: [...this.state.loaded, image.img.src] });
    console.log(`${image.img.src} ok`);
  };

  handleOnFail = (instance) => {
    console.log("crap, at least one failed");
  };

  handleDone = (instance) => {
    setTimeout(() => {
      this.setState({ finishLoad: true });
    }, 1000); // dumb
    console.log("all ok");
  };

  render() {
    return (
      <div>
        <ImagesLoaded
          onProgress={this.handleOnProgress}
          onFail={this.handleOnFail}
          done={this.handleDone}
          className={styles.ImagesLoaded}
        >
          <img src="https://images.unsplash.com/photo-1601714582667-574b826b99a6" alt="" />
          <img src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d" alt="" />
          <img src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f" alt="" />
        </ImagesLoaded>

        {!this.state.finishLoad && (
          <div className={styles.loadingOverlay}>
            <div className={styles.progress}>
              <p>Watch Magic Unfolds</p>
              <ProgressBar animated max={this.preloadNums} now={this.state.loaded.length} label={Cool()} />
            </div>
          </div>
        )}

        {this.state.finishLoad && (
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
        )}
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
