import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './assets/vendor/themify-icons/css/themify-icons.css';
import './assets/css/admin.scss';
import './assets/css/style.scss';
import './assets/js/main.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import App from './App';
import store from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
