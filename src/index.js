/*!

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import App from './App';
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import "assets/css/material-dashboard-react.css?v=1.9.0";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import axios from 'axios'

export const history = createBrowserHistory({ forceRefresh: true });

const accesToken=localStorage.getItem('token');
axios.interceptors.request.use(
    config=>{
        config.headers.authorization = `Bearer ${accesToken}`;
        return config;
    },
    error =>{
        return Promise.reject(error);
    }
)
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
