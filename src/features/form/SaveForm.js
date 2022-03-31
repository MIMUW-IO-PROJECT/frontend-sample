import React from 'react';
import { useDispatch } from 'react-redux';
import { setName } from './formSlice';

export const SaveForm = (props) => {
    // props ={ nameValue } form name hook

    const dispatch = useDispatch();

    const handleSumbit = function () {
        dispatch(setName(props.nameValue));
    }

    return (
        <div className="saveForm">
            <form>
                <input
                    id="submitFormInput"
                    type="submit"
                    onClick={handleSumbit}
                />
            </form>
        </div>

    )
}