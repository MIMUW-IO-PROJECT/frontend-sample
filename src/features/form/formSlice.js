import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	questions: [
		// {
		//     id : 1,
		//     type : "OPEN",
		//     qestion : "",
		//     answers : ""
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
			prepare(type, question, answers) {
				return {
					payload: {
						id: nanoid(),
						type,
						question,
						answers,
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
		setName: {
			reducer(state, action) {
				const { name } = action.payload;
				state.name = name;
				return state;
			}
		}
	},
});

export const { addQuestion, removeQuestion, setName } = formSlice.actions;

export default formSlice.reducer;
