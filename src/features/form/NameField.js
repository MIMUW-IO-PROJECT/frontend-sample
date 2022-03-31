import React from 'react';

export const NameField = (props) => {
    // props ={ nameValue, setNameValue }

    return (
        <div className='field nameField'>
            <input
                autoFocus
                id='nameInput'
                type="text"
                placeholder='Enter survey name...'
                value={props.nameValue}
                onChange={(newValue) => props.setNameValue(newValue.target.value)}
            />
        </div>
    )
}