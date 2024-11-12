import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: localStorage.getItem('authStatus') === 'true', //1
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            localStorage.setItem('authStatus', true);//2
            state.userData = action.payload.userData;
        },

        logout: (state) => {
            state.status = false;
            localStorage.setItem('authStatus', false);//3
            state.userData = null;
            window.location.href = '/';
        }
    }
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;