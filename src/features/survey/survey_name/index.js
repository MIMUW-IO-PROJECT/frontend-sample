import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setNameValue } from './actions';
import { nameSelector } from './selectors';

export const NameField = (props) => {

    const nameValue = useSelector(nameSelector);
    const dispatch = useDispatch();
    const onFieldChange = (newValue) => {
        dispatch(setNameValue(newValue));
    }

    return (
        <div className='field nameField'>
            <input
                autoFocus
                id='nameInput'
                type="text"
                placeholder='Enter survey name...'
                value={nameValue}
                onChange={(newValue) => onFieldChange(newValue.target.value)}
            />
        </div>
    )
}