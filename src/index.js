import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './page/Home'
import Login from './page/Login/index'

import reportWebVitals from './reportWebVitals';
import {Switch,Route} from 'react-router-dom'
import { ConfigProvider } from "antd";
import {Provider} from 'react-redux'
import zhCN from "antd/lib/locale/zh_CN";
import history from './utils/history'
import store from './store'
import {ConnectedRouter } from 'connected-react-router'
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ConfigProvider locale={zhCN}>
                <Switch>
                    <Route path="/login" exact component={Login} ></Route>
                    <Route path="/">
                        <App/>
                        
                    </Route>    
                </Switch>
            </ConfigProvider>
        </ConnectedRouter>
    </Provider>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


