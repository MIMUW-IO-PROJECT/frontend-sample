import React, { useState } from 'react';

export const OptionField = (props) => {

    return (
        <div className='field'>
            {props.value} 
            <button
                className='surveyButton'
                onClick={() => props.remove(props.index)}
            ><strong>X</strong></button>
        </div>
    )
}