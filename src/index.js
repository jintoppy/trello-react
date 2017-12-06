import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login/Login';
import Board from './components/Board/Board';
import Home from './components/Home/Home';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Login} />
            <Route path="login" component={Login} />
            <Route path="board" component={Board} />
        </Route>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
