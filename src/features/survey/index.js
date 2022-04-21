import React from 'react';
import { NameField } from './survey_name';
import { Form } from './components';

import { useNavigate } from "react-router-dom";

export const Survey = () => {
    const navigate = useNavigate();
    const postForm = async function () {
        const promise1 = new Promise((resolve) => {
            setTimeout(() => {
              resolve(123);
            }, 456);
          });
        const formId = await promise1;
        navigate("/display_link", {state: {'formId' : formId} });
    };

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