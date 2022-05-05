import React from "react";
import { NameField } from "./survey_name";
import { EndDateField } from "./survey_end_date";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "./components";
import axios from "axios";
import { backendUrl, createForm } from "../../routes";

export const Survey = () => {
    const navigate = useNavigate();
    const form = useSelector((state) => state);

    const postForm = async () => {
        axios
            .post(backendUrl + createForm, { ...form })
            .then((res) => {
                console.log(res);
                navigate("/display_link", { state: { formId: JSON.stringify(res.data) } });
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data);
            });
    };

    return (
        <div className="survey">
            <div className="title field">Stwórz własną ankietę!</div>
            <NameField />
            <div className="title field">
                Data końca ankiety w formacie RRRR-MM-DD.
            </div>
            <EndDateField />
            <Form />
            <button onClick={postForm}>Dalej</button>
        </div>
    );
};
