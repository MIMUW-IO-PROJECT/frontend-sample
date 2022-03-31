import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./app/store";
import { Provider } from "react-redux";

import { CreateForm } from "./features/form/CreateForm";

function start() {
	ReactDOM.render(
		<div className="survey">
			<div className="title field">Stwórz własną ankietę!</div>
			<Provider store={store}>
				<CreateForm/>
			</Provider>
		</div>,
		document.getElementById("root")
	);
}

start();
