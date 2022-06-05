import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createReducer } from "./reducer";

import { createStore } from "redux";

import "./index.css";

import { Survey } from "./features/survey";
import { LinkPage } from "./features/link";
import { AnswerPage } from "./features/answer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const store = createStore(createReducer());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/frontend-sample" element={<Survey />} />
                <Route path="/display_link" element={<LinkPage />} />
                <Route path="/survey_answer/:formId" element={<AnswerPage />} />
            </Routes>
        </Router>
    </Provider>,

    document.getElementById("root")
);
