import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewAnswer } from '../../../actions';
import { allAnswersSelector, answerSelector } from '../../../selectors';

export const InsertField = (props) => {
    const [insertValue, setInsertValue] = useState("")

    const dispatch = useDispatch();

    const currentAnswers = useSelector(state =>
        allAnswersSelector(state, props.index))

    const handleNewAnswer = () => {
        let toInsert = insertValue.replace(/\s+/g, ' ').trim();
        if (toInsert && !currentAnswers.includes(toInsert)) {
            dispatch(addNewAnswer(props.index, toInsert))
            setInsertValue("");
        }
    }


    if (props.type === "OPEN") {
        return (
            <div className='field'
                style={{ display: "none" }}
            >
                <input
                    id='textInput'
                    type="text"
                    placeholder='Enter text...'
                    value={insertValue}
                    onChange={(newValue) => setInsertValue(newValue.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleNewAnswer();
                        }
                    }}
                />
                <button
                    className='surveyButton'
                    onClick={handleNewAnswer}
                >&#10004;</button>
            </div>
        )
    }

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
                        handleNewAnswer();
                    }
                }}
            />
            <button
                className='surveyButton'
                onClick={handleNewAnswer}
            >&#10004;</button>
        </div>
    )
}