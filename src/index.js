import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App'
import store from "./app/store";
import { Provider } from "react-redux";

import { NameField } from "./elements/nameField";
import { QuestionsList } from "./features/form/QuestionsList";
import { InputField } from "./features/form/InputField";

function start() {
	ReactDOM.render(
		<div className="survey">
			<div className="title field">Stwórz własną ankietę!</div>
			<Provider store={store}>
				<React.Fragment>
					<NameField />
					<QuestionsList />
					<InputField />
				</React.Fragment>
			</Provider>
		</div>,
		document.getElementById("root")
	);
}

start();
