import React from "react";
import { OptionField } from "./elements/optionField";
import { InsertField } from "./elements/insertField";
import { QuestionNameField } from "./elements/questionNameField";
import {
    changeQuestionType,
    deleteAllAnswers,
    deleteQuestion,
} from "../../actions";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { types } from "../../../../questionTypes";

export const Question = (props) => {
    const dispatch = useDispatch();

    let options = [];
    if (props.type !== "OPEN") options = props.answers;

    const handleChange = (newState) => {
        dispatch(changeQuestionType(props.index, newState.target.value));
        if (newState.target.value === "OPEN") {
            dispatch(deleteAllAnswers(props.index));
        }
    };

    return (
        <div className="q_margin">
            <div className="question-type-selector">
                <div className="question-type-selector-label">
                    <span
                        style={{
                            display: "inline-block",
                        }}
                    >
                        <label
                            style={{
                                "margin-right": "10px",
                            }}
                        >
                            Pytanie {props.index + 1}
                        </label>
                        <select className="type-select" onChange={handleChange}>
                            {Object.values(types).map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </span>
                </div>
                <button
                    className="surveyButton"
                    onClick={() => dispatch(deleteQuestion(props.index))}
                >
                    X
                </button>
            </div>

            <QuestionNameField index={props.index} />
            {options.map((answer, index) => (
                <OptionField
                    key={index}
                    ans_index={index}
                    index={props.index}
                    value={answer}
                />
            ))}
            <InsertField type={props.type} index={props.index} />
        </div>
    );
};

Question.propTypes = {
    type: PropTypes.string,
    index: PropTypes.string,
    answers: PropTypes.array,
};
