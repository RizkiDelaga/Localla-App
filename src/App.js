import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import IndexRoute from "./routes/indexRoute";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Provider store={store}>
          <IndexRoute />
        </Provider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
