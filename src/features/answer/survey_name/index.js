import React from "react";

import { useSelector } from "react-redux";
import { nameSelector } from "./selectors";

export const NameField = () => {
    const nameValue = useSelector(nameSelector);

    return (
        <div className="field nameField">
            <span>{ nameValue }</span>
        </div>
    );
};
