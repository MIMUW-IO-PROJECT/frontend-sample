import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import { nameSelector } from "./survey_name/selectors";
import { questionsSelector } from "./selectors";
import { NameField } from './survey_name';
import { Form } from './components';

export const Survey = (props) => {
    const currentName = useSelector(nameSelector);
    const questions = useSelector(questionsSelector);

    const dispatch = useDispatch();
    return (
        <div className='survey'>
            <div className='title field'>
                Stwórz własną ankietę!
            </div>
            <NameField />
            <Form />
        </div>
    );
}