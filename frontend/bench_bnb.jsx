import React from "react";
import ReactDOM from "react-dom";
import {
  postUser,
  postSession,
  deleteSession
} from './util/session_api_util';
import configureStore from './store/store';
import {
  signup,
  login,
  logout
} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  window.postUser = postUser;
  window.postSession = postSession;
  window.deleteSession = deleteSession;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.store = configureStore();

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});