import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store  from "./store";
import { Provider } from "react-redux";
import './antd.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <div className ='app'>
      <App />
    </div>
  </Provider>,
  document.getElementById("root"));
