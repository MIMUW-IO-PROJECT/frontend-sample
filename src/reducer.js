import { combineReducers } from "redux";
import { questionsReducer } from "./features/survey/reducers";
import { nameReducer } from "./features/survey/survey_name/reducers";

export const createReducer = () => {
    return combineReducers({
        name: nameReducer,
        questions: questionsReducer
    });
}