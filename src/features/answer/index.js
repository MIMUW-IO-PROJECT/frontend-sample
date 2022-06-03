import React from "react";
import axios from "axios";

import { NameField } from "./survey_name";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Form } from "./form";
import { backendUrl, submitAnswer, getForm } from "../../routes";
import { loadForm } from "../survey/actions";
import { setNameValue } from "../survey/survey_name/actions";

export const AnswerPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const back = () => {
        navigate("/frontend-sample");
    };

    const formId = location.href.split("/").pop();

    const getSurvey = async () => {
        axios
            .get(backendUrl + getForm + formId)
            .then((res) => {
                // console.log(res);
                // console.log(res.data);
                dispatch(
                    setNameValue(
                        res.data?.formName ??
                            "this survey has no name field because backend hadn't support it when it was created"
                    )
                );
                dispatch(loadForm(res.data.questions));
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data);
            });
    };

    const postAnswers = async () => {
        // To jest brzydki hack, ale nie umiem inaczej pobrać tych odpowiedzi,
        // bo nie rozumiem, jak działa ta dziadowska zagrywka, co lepiej się
        // w nią nie zagłębiać.
        const answers = JSON.parse(localStorage.getItem("answers"));
        // console.log(answers);

        axios
            .post(backendUrl + submitAnswer, {
                formId,
                answers,
            })
            .then((res) => {
                console.log(res);
                alert("Wysłało się!");
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data);
            });
    };

    return (
        getSurvey(),
        (
            <div className="survey">
                <div className="title field">Wypełnij ankietę</div>
                <NameField />
                <Form />
                {/* wstecz raczej jest do usunięcia */}
                <button onClick={back}>Wstecz</button>
                <button onClick={postAnswers}>Wyślij</button>
            </div>
        )
    );
};
