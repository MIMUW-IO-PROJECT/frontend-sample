import React, { useState } from "react";
import PropTypes from "prop-types";

export const QuestionInput = (props) => {
    const setAnswer = props.setAnswer;

    const handleSingleChange = (newValue) => {
        setAnswer(parseInt(newValue.target.value));
    };

    // MULTI
    const [checkboxState, setCheckboxState] = useState(
        Array(props.answers.length).fill(false)
    );

    const handleCheckboxChange = (newValue) => {
        console.log(checkboxState);
        const changed = parseInt(newValue.target.value);
        console.log(changed);
        const updateCState = checkboxState.map((item, index) => {
            console.log(index, changed, item, index === changed);
            return index === changed ? !item : item;
        });
        setCheckboxState(updateCState);
        console.log(updateCState);
        const goodFormat = updateCState.map((item, index) =>
            item ? index + 1 : null
        );
        console.log(goodFormat);
        setAnswer(goodFormat.filter(Number).map((item) => item - 1));
    };

    if (props.type === "OPEN") {
        return (
            <div className="field">
                <input
                    id="textInput"
                    type="text"
                    placeholder="Enter text..."
                    onChange={(newValue) => setAnswer(newValue.target.value)}
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
                            className={index}
                            type="radio"
                            name={props.index}
                            value={index}
                            key={index}
                            onChange={handleSingleChange}
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
                    onChange={handleCheckboxChange}
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
                        value={index}
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
    index: PropTypes.string,
};
