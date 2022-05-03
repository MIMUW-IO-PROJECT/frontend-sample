import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { setEndDateValue } from "./actions";
import { endDateSelector } from "./selectors";

export const EndDateField = () => {
    const endDateValue = useSelector(endDateSelector);
    const dispatch = useDispatch();
    const onFieldChange = (newValue) => {
        dispatch(setEndDateValue(newValue));
    };

    return (
        <div className="field endDateField">
            <input
                autoFocus
                id="endDateInput"
                type="text"
                placeholder="Enter survey end date..."
                value={endDateValue}
                onChange={(newValue) => onFieldChange(newValue.target.value)}
            />
        </div>
    );
};
