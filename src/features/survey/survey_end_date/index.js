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

    const minDate = () => {
        const today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();

        return yyyy + "-" + mm + "-" + dd;
    };

    return (
        <div className="field endDateField">
            <input
                type="date"
                value={endDateValue}
                onChange={(newValue) => onFieldChange(newValue.target.value)}
                min={minDate()}
            />
        </div>
    );
};
