import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './ducks/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './components/About';
import ChartPage from './components/ChartPage';
import FacebookChartPage from './components/FacebookChartPage';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/about" component= { About } />
                    <Route path="/chart" component= { ChartPage }/>
                    <Route path="/fbchart" component= { FacebookChartPage }/>
                    <Route exact path="/" component= { App } />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
