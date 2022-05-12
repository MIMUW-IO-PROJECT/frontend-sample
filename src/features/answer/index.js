import React from "react";

import { NameField } from "./survey_name";
import { useNavigate } from "react-router-dom";
import { Form } from "./form";

export const AnswerPage = () => {
    const navigate = useNavigate();

    const back = () => {
        navigate("/frontend-sample");
    }

    return (
        <div className="survey">
            <div className="title field">Wypełnij ankietę</div>
            <NameField />
            <Form />
            <button onClick={ back }>Wstecz</button>
        </div>
    );
};
