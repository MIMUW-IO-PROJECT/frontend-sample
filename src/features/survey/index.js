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
                navigate("/display_link", { state: { form: res.data } });
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data);
            });
    };

    return (
        <div className="survey_content">
            <div className="survey_header">
                <NameField />
            </div>
            <div className="survey">
                {/* <div className="title field">
                    Data końca ankiety w formacie RRRR-MM-DD.
                </div> */}
                <EndDateField />
                <Form />
                <button className="surveyButton dalej" onClick={postForm}>
                    Dalej
                </button>
            </div>
        </div>
    );
};
