import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from "./store/configureStore";

ReactDOM.render(
  <Provider store={store}>
    <div className ='app'>
      <App />
    </div>
  </Provider>,
  document.getElementById("root"));
