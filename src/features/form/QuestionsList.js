import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeQuestion } from "./formSlice";
export const QuestionsList = () => {
	const questions = useSelector(state => state.form.questions);

	const dispatch = useDispatch();

	const renderQuestion = questions.map((question) => {
		return (
			<div className="field" key={question.id}>
				{question.text}
				<button
					className="surveyButton"
					onClick={() => dispatch(removeQuestion({id : question.id}))}
				>
					<strong>X</strong>
				</button>
			</div>
		);
	});

	return <section className="question-list">{renderQuestion}</section>;
};
