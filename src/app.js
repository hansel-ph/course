import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { startSetVideos } from "./actions/person";
import { login, logout } from "./actions/auth";
import configureStore from "./store/configureStore";
import { firebase } from "./firebase/firebase";

const store = configureStore();
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <AppRouter />
      </Provider>,
      document.getElementById("app")
    );
    hasRendered = true;
  }
};

ReactDOM.render(<div>...loading</div>, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetVideos()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/home");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
