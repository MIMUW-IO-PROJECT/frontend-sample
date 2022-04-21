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
            <span
                style={{
                    display: "inline-block",
                    marginBottom: "5px",
                }}
            >
                <label
                    style={{
                        marginLeft: "40px",
                        marginRight: "20px",
                    }}
                >
                    Pytanie #{props.index + 1}
                </label>
                <select style={{ marginRight: "5px" }} onChange={handleChange}>
                    <option value={"CLOSED"}>CLOSED</option>
                    <option selected value={"OPEN"}>
                        OPEN
                    </option>
                    <option value={"MULTI"}>MULTI</option>
                </select>
                <button
                    className="surveyButton"
                    onClick={() => dispatch(deleteQuestion(props.index))}
                >
                    <strong>X</strong>
                </button>
            </span>

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
