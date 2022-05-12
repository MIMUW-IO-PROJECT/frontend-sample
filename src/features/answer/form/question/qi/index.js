import React from "react";
import PropTypes from "prop-types";

export const QuestionInput = (props) => {

    const setAnswer = props.setAnswer;

    if (props.type === "OPEN") {
        return (
            <div className="field">
                <input
                    id="textInput"
                    type="text"
                    placeholder="Enter text..."
                    onChange={(newValue) => setAnswer(newValue)}
                />
            </div>
        );
    }

    if (props.type === "SINGLE") {
        return (
            <div className="field">
                {props.answers.map((answer, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                        }}
                    >
                        <label
                            style={{
                                marginLeft: "40px",
                                marginRight: "20px",
                            }}
                        >
                            {answer}
                        </label>
                        <input
                            className=""
                            type="radio"
                            name="answer"
                            value={answer}
                        />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="field">
            {props.answers.map((answer, index) => (
                <div
                    key={index}
                    style={{
                        display: "flex",
                    }}
                >
                    <label
                        style={{
                            marginLeft: "40px",
                            marginRight: "20px",
                        }}
                    >
                        {answer}
                    </label>
                    <input
                        className=""
                        type="checkbox"
                        name="answer"
                        value={answer}
                    />
                </div>
            ))}
        </div>
    );
};

QuestionInput.propTypes = {
    type: PropTypes.string,
    setAnswer: PropTypes.func,
    answers: PropTypes.array,
};