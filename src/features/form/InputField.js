import { nothing } from 'immer';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { addQuestion } from "./formSlice";

export const InputField = (props) => {
    const [insertValue, setInsertValue] = useState("")
    const [questionType, setQuestionType] = useState("")

    const dispatch = useDispatch();

    const questionTypes = useSelector(state => state.questionType)

    const onQuestionTypeChanged = e => setQuestionType(e.target.value)

    useEffect(() => {
        if (document.activeElement !== document.getElementById('nameInput'))
            document.getElementById('textInput').focus();
    });

    const onSaveQuestionClicked = () => {
        if(insertValue && questionTypes) {
            dispatch(addQuestion(insertValue, questionType, ""))
            setInsertValue("")
        }
    }

    const questionTypeOptions = questionTypes.map(qType => (
        <option key={qType.id} value={qType.id}>
            {qType.type}
        </option>
    ))

    return (
        <div className='field'>
            <input
                id='textInput'
                type="text"
                placeholder='Enter text...'
                value={insertValue}
                onChange={(newValue) => setInsertValue(newValue.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        props.add(insertValue);
                        setInsertValue("");
                    }
                }}
            />
            <select id="questionType" value={questionType} onChange={onQuestionTypeChanged}>
                <option value=""></option>
                {questionTypeOptions}
            </select>
            <button
                className='surveyButton'
                onClick={onSaveQuestionClicked}  
            >&#10004;</button>
        </div>
    )
}