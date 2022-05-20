import React from "react";
import PropTypes from "prop-types";
import { QuestionInput } from "./qi";

export const Question = (props) => {
    return (
        <div className="q_margin">
            <span
                style={{
                    display: "inline-block",
                    marginBottom: "5px",
                    marginLeft: "40px",
                    marginRight: "20px",
                }}
            >
                Pytanie #{props.index}: {props.question}
            </span>
            <QuestionInput
                setAnswer={props.setAnswer}
                type={props.type}
                answers={props.answers}
            />
        </div>
    );
};

Question.propTypes = {
    question: PropTypes.string,
    type: PropTypes.string,
    index: PropTypes.string,
    answers: PropTypes.array,
    setAnswer: PropTypes.func,
};
