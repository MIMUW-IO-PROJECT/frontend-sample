import { combineReducers } from "redux";
import { questionsReducer } from "./features/survey/reducers";
import { nameReducer } from "./features/survey/survey_name/reducers";

const initialState = {
    name: "",
    questions: []
}

export const createReducer = () => {
    return combineReducers({
        name: nameReducer,
        questions: questionsReducer
    });
}