import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import IndexRoute from './routes/indexRoute';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <IndexRoute />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;