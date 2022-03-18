import React, { useState, useEffect } from 'react';

export const InsertField = (props) => {
    const [insertValue, setInsertValue] = useState("")

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
                    props.add(insertValue);
                    setInsertValue("");
                }}  
            >&#10004;</button>
        </div>
    )
}