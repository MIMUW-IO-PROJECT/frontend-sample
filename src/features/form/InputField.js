import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import { addQuestion } from "./formSlice";

export const InputField = (props) => {
    const [insertValue, setInsertValue] = useState("")

    const dispatch = useDispatch();

    useEffect(() => {
        if (document.activeElement !== document.getElementById('nameInput'))
            document.getElementById('textInput').focus();
    });

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
            <button
                className='surveyButton'
                onClick={() => {
                    dispatch(addQuestion(insertValue, "OPEN", ""))
                    setInsertValue("");
                }}  
            >&#10004;</button>
        </div>
    )
}