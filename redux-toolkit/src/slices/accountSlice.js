import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    amount: 1,
    pending: false,
    error: null
}

export const getUserAccount = createAsyncThunk(
    'account/getUserById',
    async (userId, thunkAPI) => {
        const { data } = await axios.get(`http://localhost:3000/accounts/${userId}`);
        return data;
    },
);

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        increment: (state) => {
            state.amount += 1;
        },
        decrement: (state) => {
            state.amount -= 1;
        },
        incrementByAmt: (state, action) => {
            state.amount += parseInt(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserAccount.fulfilled, (state, action) => {
            state.pending = false;
            state.amount = action.payload;
        }).addCase(getUserAccount.pending, (state, action) => {
            state.pending = true;
        }).addCase(getUserAccount.rejected, (state, action) => {
            state.pending = false;
            state.error = action.error.message;
        });
    }
});

export const { increment, decrement, incrementByAmt } = accountSlice.actions;

export default accountSlice.reducer;