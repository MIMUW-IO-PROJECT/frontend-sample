import React from "react";

function Answer({ answer, index, removeAnswer }) {
    return (
        <div className="answer">
            {answer.text}

            <div>
                <button onClick={() => removeAnswer(index)}>remove</button>
            </div>
        </div>
    );
}

function AnswerForm({ addAnswer }) {
    const [answerText, setAnswerText] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!answerText) return;
        addAnswer(answerText);
        setAnswerText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={answerText}
                onChange={(e) => setAnswerText(e.target.value)}
            />
        </form>
    );
}

function CreateForm() {
    const [answers, setAnswers] = React.useState([]);

    const addAnswer = (text) => {
        const newAnswers = [...answers, { text }];
        setAnswers(newAnswers);
    };

    const removeAnswer = (index) => {
        const newAnswers = [...answers];
        newAnswers.splice(index, 1);
        setAnswers(newAnswers);
    };

    return (
        <div>
            <div>
                {answers.map((answer, index) => (
                    <Answer
                        key={index}
                        answer={answer}
                        index={index}
                        removeAnswer={removeAnswer}
                    />
                ))}
            </div>
            <AnswerForm addAnswer={addAnswer}/>
        </div>
    );
}

export default CreateForm;
