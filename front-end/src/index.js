import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import store  from "./store";
import './antd.css';
import './index.css';


ReactDOM.render((
  <Provider store={store}>
      <div className ='app'>
        <App />
      </div>
  </Provider>
),document.getElementById("root"));
