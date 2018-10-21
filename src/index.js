import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import 'bootstrap/dist/css/bootstrap.css';

//Routes
import AppRoutes from './Routes';

ReactDOM.render(
    <AppRoutes />,
  document.getElementById('root'));

// If you want your app to work offline and load faster2, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
