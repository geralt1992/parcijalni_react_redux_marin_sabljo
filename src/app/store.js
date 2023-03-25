//redux - whole file
import { configureStore } from "@reduxjs/toolkit";
import formReducer from '../Components/formSlice';

export default configureStore({
    reducer: {
        form: formReducer
    }
})