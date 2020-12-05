import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/root";

// For testing --------------------
import {
  postUser,
  postSession,
  deleteSession
} from './util/session_api_util';
import {
  signup,
  login,
  logout
} from './actions/session_actions'
// -------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // For testing ----------------------
  window.postUser = postUser;
  window.postSession = postSession;
  window.deleteSession = deleteSession;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.store = configureStore();
  // ----------------------------------

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});