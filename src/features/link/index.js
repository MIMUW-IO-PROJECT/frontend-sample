import React from "react";
import { useLocation } from "react-router-dom";

export const LinkPage = function () {
    const { state } = useLocation();
    const { formId } = state; // Read values passed on state
    return <div>{formId}</div>;
};
