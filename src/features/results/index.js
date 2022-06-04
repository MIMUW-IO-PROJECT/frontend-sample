import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendUrl, getForm, getResults } from "../../routes";
import axios from "axios";

import { Open } from "./components/open";
import { Multi } from "./components/multi";
import { Single } from "./components/single";
import "charts.css";

export const ResultPage = () => {
    const { formId } = useParams();
    const [form, setForm] = useState(null);
    const [answers, setAnswers] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchForm() {
            const response = await axios.get(
                backendUrl + getForm + `/${formId}`
            );
            if (response.status == 200) {
                // console.log(response.data);
                setForm(response.data);
            } else {
                console.log(
                    `Wystąpił błąd pobierając ankietę. Http error code : ${response.status}`
                );
                setError(
                    `Wystąpił błąd pobierając ankietę. Http error code : ${response.status}`
                );
            }
        }

        async function fetchAnswers() {
            const response = await axios.get(
                backendUrl + getResults + `/${formId}`
            );
            if (response.status == 200) {
                // console.log(response.data);
                setAnswers(response.data);
            } else {
                console.log(
                    `Wystąpił błąd pobierając ankietę. Http error code : ${response.status}`
                );
                setError(
                    `Wystąpił błąd pobierając odpowiedzi. Http error code : ${response.status}`
                );
            }
        }
        fetchForm();
        fetchAnswers();
    }, [formId]);

    const stats = combineFormWithAnswers(form, answers);
    console.log(stats);

    const renderSwitch = (question) => {
        switch (question.type) {
            case "OPEN":
                return (
                    <Open
                        question={question.question}
                        answers={question.answers}
                        votes={question.votes}
                    />
                );
            case "MULTI":
                return (
                    <Multi
                        question={question.question}
                        answers={question.answers}
                        votes={question.votes}
                        sizes={question.sizes}
                    />
                );
            case "SINGLE":
                return (
                    <Single
                        question={question.question}
                        answers={question.answers}
                        votes={question.votes}
                        sizes={question.sizes}
                    />
                );
        }
    };
    if (error != null) {
        return <div>{error}</div>;
    }
    return (
        <div>
            {stats &&
                stats.map((question, index) => {
                    return (
                        <div key={index}>{renderSwitch(question, index)}</div>
                    );
                })}
        </div>
    );
};

function combineFormWithAnswers(form, answers) {
    if (form == null || answers == null) return null;

    let formQuestions = form.questions;
    let formAnswers = answers.results;

    for (let i = 0; i < formQuestions.length; i++) {
        formQuestions[i].votes = formAnswers[i];
        if (
            formQuestions[i].type == "SINGLE" ||
            formQuestions[i].type == "MULTI"
        ) {
            let answersSum = formQuestions[i].votes.reduce((a, b) => a + b);
            formQuestions[i].sizes = [];
            for (let vote in formQuestions[i].votes) {
                formQuestions[i].sizes.push(vote / answersSum);
            }
        }
    }

    return formQuestions;
}
