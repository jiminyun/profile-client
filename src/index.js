import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "redux/configureStore";
import App from "components/App";

console.log(store.getState());
//store.dispatch({ type: "hello" });

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} />
    <App />
  </Provider>,
  document.getElementById("root")
);
