import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createReducer } from './reducer';

import { createStore } from 'redux';

import "./index.css"

import { Survey } from './features/survey'

const store = createStore(createReducer())

ReactDOM.render(
    <Provider store={store}>
        <Survey />
    </Provider>,

    document.getElementById('root')
);