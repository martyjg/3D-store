import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClientRoot from './ClientRoot';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store/index';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ClientRoot />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
