import React, { useState } from 'react';

import { NameField } from './NameField';
import { QuestionsList } from './QuestionsList';
import { InputField } from './InputField';
import { SaveForm } from './SaveForm';
export const CreateForm = (props) => {
    const [nameValue, setNameValue] = useState("")

    return (
        <React.Fragment>
            <NameField nameValue={nameValue} setNameValue={setNameValue} />
            <QuestionsList />
            <InputField />
            <SaveForm nameValue={nameValue}/>
		</React.Fragment>
    )
}