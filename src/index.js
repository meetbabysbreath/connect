import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import store from 'stores';
import Provider from './provider';
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
, document.getElementById('app'));
