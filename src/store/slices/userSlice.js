import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: {},
        isAuthenticated: false,
        error: null,
        message: null,
        isUpdated: false,
    },
    reducers: {
        loginRequest(state, action) {
            state.loading = true;
            state.isAuthenticated = false;
            state.user = {};
            state.error = null;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
            state.message = action.payload;
        },
        getAllUserRequest(state, action) {
            state.loading = true;
            state.isAuthenticated = false;
            state.user = {};
            state.error = null;
        },
        getAllUserSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
        },
        getAllUserFailed(state, action) {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = {};
            state.error = action.payload;
        },
        deleteUserRequest(state, action) {
            state.loading = true;
            state.isAuthenticated = state.isAuthenticated;
            state.error = null;
            state.message = null;
        },
        deleteUserSuccess(state, action) {
            state.error = null;
            state.loading = false;
            state.message = 'user deleted successfully';
            if (state.user.data) {
                state.user.data = state.user.data.filter(
                    (user) => user.id !== action.payload
                );
            }
        },
        deleteUserFailed(state, action) {
            state.error = action.payload;
            state.loading = false;
            state.message = null
        },

        updateUserRequest(state, action) {
            state.loading = true;
            state.error = null;
            state.message = null;
            state.isAuthenticated = state.isAuthenticated;
        },
        updateUserSuccess(state, action) {
            state.loading = false;
            state.error = null;
            state.message = action.payload;
            if (state.user.data) {
                const updatedUser = action.payload;
                const index = state.user.data.findIndex(user => user.id === updatedUser.id);
                if (index !== -1) {
                    state.user.data[index] = updatedUser;
                }
            }
        },
        updateUserFailed(state, action) {
            state.loading = false;
            state.error = action.payload;
            state.message = null;

        },
        clearAllErrors(state, action) {
            state.error = null;
            state = state.user;
        },
    },
});

export const login = (email, password) => async (dispatch) => {
    dispatch(userSlice.actions.loginRequest());
    try {
        const response = await axios.post(
            `https://reqres.in/api/login`,
            {
                email,
                password
            },
            { headers: { "Content-Type": "application/json" } }
        );
        const token = response.data.token
        localStorage.setItem('token', token)
        dispatch(userSlice.actions.loginSuccess(response.data.message));
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(userSlice.actions.loginFailed(error.response?.data || "Login Failed"));
    }
};

export const getAllUser = (page) => async (dispatch) => {
    dispatch(userSlice.actions.getAllUserRequest())
    try {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`, {
            headers: { "Content-Type": "application/json" },
        })
        // console.log(response.data)
        dispatch(userSlice.actions.getAllUserSuccess(response.data))
        dispatch(userSlice.actions.clearAllErrors())
    } catch (error) {
        dispatch(userSlice.actions.getAllUserFailed(error.response?.data || "Error fetching users"))
    }
}

export const deleteUser = (id) => async (dispatch) => {
    dispatch(userSlice.actions.deleteUserRequest())
    try {
        const response = await axios.delete(`https://reqres.in/api/users/${id}`)
        dispatch(userSlice.actions.deleteUserSuccess(id))
        dispatch(userSlice.actions.clearAllErrors())
    } catch (error) {
        dispatch(userSlice.actions.deleteUserFailed(error.response?.data || "user not found"))
    }
}

export const updateUser = (id, updatedData) => async (dispatch) => {
    dispatch(userSlice.actions.updateUserRequest())
    try {
        const response = await axios.put(`https://reqres.in/api/users/${id}`, updatedData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch(userSlice.actions.updateUserSuccess({ id, updatedData }))
        dispatch(userSlice.actions.clearAllErrors())
    } catch (error) {
        dispatch(userSlice.actions.deleteUserFailed(error.response?.data || "user not found"))

    }
}

export const clearAllUserErrors = () => (dispatch) => {
    dispatch(userSlice.actions.clearAllErrors());
};

export default userSlice.reducer;