import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createReducer } from './reducer';

import { createStore } from 'redux';

import "./index.css"

import { Survey } from './features/survey'
import { LinkPage } from './features/link';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

const store = createStore(createReducer())

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/create_form" element={<Survey />}/>
                <Route path="/display_link" element={<LinkPage/>}/>
            </Routes>
        </Router>
    </Provider>,

    document.getElementById('root')
);