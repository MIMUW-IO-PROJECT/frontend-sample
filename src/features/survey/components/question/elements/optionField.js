import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAnswer } from '../../../actions';
import { useSelector } from 'react-redux';
import { answerSelector } from '../../../selectors';

export const OptionField = (props) => {

    const value = useSelector(state => answerSelector(
        state, props.index, props.ans_index))

    const dispatch = useDispatch();

    return (
        <div className='field'>
            {value}
            <button
                className='surveyButton'
                onClick={() => dispatch(deleteAnswer(props.index, props.ans_index))}
            ><strong>X</strong></button>
        </div>
    )
}
