import React, { useState } from "react";

import { nameSelector, questionsSelector } from "./selectors";
import { useSelector } from "react-redux";
import { Question } from "./question";
import { AJson } from "./jsonAnswer";

export const Form = () => {
    const questions = useSelector(questionsSelector);
    const name = useSelector(nameSelector)
    const [answer, setAnswer] = useState(Array(questions.length).fill(null))

    const setOneAnswer = (index) => (value) => {
        let newAnswer = answer;
        newAnswer[index] = value;
        setAnswer(newAnswer);
    }

    return (
        <div>
            {questions.map((question, index) => (
                <Question
                    key={index}
                    setAnswer={setOneAnswer(index)}
                    index={String(index)}
                    question={question.question}
                    type={question.type}
                    answers={question.answers}
                />
            ))}
            <AJson 
                show={answer}
                name={name}
            />
        </div>
    );
};