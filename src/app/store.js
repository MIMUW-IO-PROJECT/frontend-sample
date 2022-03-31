import { configureStore } from '@reduxjs/toolkit'

import formReducer from '../features/form/formSlice'
import questionTypeReducer from '../features/form/questionTypeSlice'

export default configureStore({
  reducer: {
    form : formReducer,
    questionType : questionTypeReducer
  }
})