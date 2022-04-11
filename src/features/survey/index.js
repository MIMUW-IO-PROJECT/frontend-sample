import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import { nameSelector } from "./survey_name/selectors";
import { questionsSelector } from "./selectors";
import { NameField } from './survey_name';
import { Form } from './components';

import { useNavigate } from "react-router-dom";

export const Survey = (props) => {
    const currentName = useSelector(nameSelector);
    const questions = useSelector(questionsSelector);

    const navigate = useNavigate();
    const postForm = async function () {
        const promise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(123);
            }, 456);
          });
        const formId = await promise1;
        navigate("/display_link", {state: {'formId' : formId} });
    };

    const dispatch = useDispatch();
    return (
        <div className='survey'>
            <div className='title field'>
                Stwórz własną ankietę!
            </div>
            <NameField />
            <Form />
            <button onClick={postForm}>Dalej</button>
        </div>
    );
}