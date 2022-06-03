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

    // debug rozwiąż z tego korzystał
    // const changeRoute = () => {
    //     navigate("/survey_answer");
    // };

    return (
        <div className="survey_content">
            <div className="survey_header">
                <NameField />
            </div>
            <div className="survey">
                <EndDateField />
                <Form />
                <button className="surveyButton dalej" onClick={postForm}>
                    Utwórz ankietę
                </button>
                {/* debug rozwiąż przestał działać ale chyba jest już nie potrzebny */}
                {/* <button className="surveyButton dalej" onClick={changeRoute}>
                    Debug rozwiąż
                </button> */}
            </div>
        </div>
    );
};
