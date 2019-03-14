import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import projects from "redux/modules/projects";

const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

// 콘솔에 출력되는 이유는 아마 Provider 설정 때문?
const env = process.env.NODE_ENV;
console.log("env : ", env);

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  // put all your reducers here
  router: connectRouter(history),
  projects
});

let store = initialState =>
  createStore(reducer, applyMiddleware(...middlewares));

// let store = initialState => createStore(reducer);
export { history };

export default store();
