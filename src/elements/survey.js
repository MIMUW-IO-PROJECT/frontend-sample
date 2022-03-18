import React, { useState } from 'react';

import { OptionField } from './optionField'
import { NameField } from './nameField'
import { InsertField } from './insertField'

export const Survey = (props) => {
    const [options, setOptions] = useState([])

    const removeOption = (index) => {
        const newOptions = [...options];
        newOptions.splice(index, 1);
        setOptions(newOptions);
    }

    const addOption = (value) => {
        const newValue = value.replace(/\s+/g, ' ').trim();
        if (newValue && !options.includes(newValue)) {
            setOptions([...options, newValue]);
        }
    }

    return (
        <div className='survey'>
            <div className='title field'>
                Stwórz własną ankietę!
            </div>
            <NameField/>
            {options.map((value, index) => (
                <OptionField
                    value={value}
                    index={index}
                    remove={removeOption}
                />
            )
            )}
            <InsertField
                add={addOption}
            />
        </div>
    );
}