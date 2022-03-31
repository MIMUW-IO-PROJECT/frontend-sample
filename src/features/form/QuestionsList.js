import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeQuestion } from "./formSlice";
export const QuestionsList = () => {
	const questions = useSelector(state => state.form.questions);
	const questionTypes = useSelector(state => state.questionType);

	const dispatch = useDispatch();

	const decodeQuestionType = (qTypeId) => {
		for(let qType of questionTypes )
		{
			console.log(qType);
			if (qType["id"] == qTypeId)
				return qType["type"];
		}
	}

	const renderQuestion = questions.map((question) => {
		return (
			<div className="field" key={question.id}>
				{question.question} type : {decodeQuestionType(question.type)}
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
