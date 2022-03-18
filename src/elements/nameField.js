import React, { useState } from 'react';

export const NameField = (props) => {
    const [nameValue, setNameValue] = useState("")

    return (
        <div className='field nameField'>
            <input
                autoFocus
                id='nameInput'
                type="text"
                placeholder='Enter survey name...'
                value={nameValue}
                onChange={(newValue) => setNameValue(newValue.target.value)}
            />
        </div>
    )
}