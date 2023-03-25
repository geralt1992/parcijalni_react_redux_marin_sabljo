//redux - whole file
import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'form',
    //stajetovi
    initialState: {
        trigger: true,
        userUrl: '',
        reposUrl: '',
        userData: '',
        userRepos: [],
        userInput: '',
    },
    //manipulacija stejtova
    reducers: {
       toggle: (state) => {
        state.trigger = !state.trigger;
       },

       setUrl: (state, action) => {
        state.userUrl = action.payload;
       },

       setRepoUrl: (state, action) => {
        state.reposUrl = action.payload;
       },

       setUserData: (state, action) => {
        state.userData = action.payload;
       },

       setUserRepos: (state, action) => {
        state.userRepos = action.payload;
       },

       setUserInput: (state, action) => {
        state.userInput = action.payload;
       }

    }
});

export default formSlice.reducer;
export const { setUserInput, toggle , setUrl , setRepoUrl , setUserData , setUserRepos} = formSlice.actions;