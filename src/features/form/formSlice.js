import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	questions: [
		// {
		//     id : 1,
		//     text : "",
		//     type : "OPEN",
		//     possible_answers : ""
		// }
	],
};

const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		addQuestion: {
			reducer(state, action) {
				state.questions.push(action.payload);
			},
			prepare(text, type, possible_answers) {
				return {
					payload: {
						id: nanoid(),
						text,
						type,
						possible_answers,
					},
				};
			},
		},
		removeQuestion: {
			reducer(state, action) {
				const { id } = action.payload;
				state.questions = state.questions.filter((item) => item.id !== id);
				return state;
			},
		},
	},
});

export const { addQuestion, removeQuestion } = formSlice.actions;

export default formSlice.reducer;
