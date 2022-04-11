import { useLocation } from "react-router-dom";

export const LinkPage = function (props) {
    const {state} = useLocation();
    const { formId } = state; // Read values passed on state
    return (
        <div>{formId}</div>
    )
}