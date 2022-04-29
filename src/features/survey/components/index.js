import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionsSelector } from "../selectors";
import { MassiveJson } from "./massiveJson";
import { Question } from "./question/question";

export const Form = () => {
    const questions = useSelector(questionsSelector);

    const dispatch = useDispatch();

    const random_number = Math.random();
    console.log(random_number);

    return (
        <div>
            {questions.map((question, index) => (
                <Question
                    key={index}
                    index={index}
                    question={question.question}
                    type={question.type}
                    answers={question.answers}
                />
            ))}
            <button
                style={{
                    marginLeft: "30px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    padding: "5px",
                }}
                onClick={() => dispatch({ type: "ADD_NEW_QUESTION" })}
            >
                Dodaj Nowe pytanie
            </button>
            <MassiveJson funny_number={random_number} />
        </div>
    );
};
