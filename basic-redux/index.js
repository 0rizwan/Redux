import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import pkg from "redux-logger";
import * as thunkPkg from "redux-thunk";

const thunk = thunkPkg.thunk;
const { logger } = pkg;

// constant action names
// const init = "accounts/init";
const increment = 'accounts/increment';
const decrement = 'accounts/decrement';
const incrementByVal = 'accounts/incrementByVal';
const getUserAccPending = 'accounts/pending';
const getUserAccFullfiled = 'accounts/fullfiled';
const getUserAccRejected = 'accounts/rejected';
const incrementBonus = 'bonus/incrementBonus';

// store
const store = createStore(
    combineReducers({
        account: accountsReducer,
        bonus: bonusReducer
    }),
    applyMiddleware(logger, thunk)
);

// reducer fn
function accountsReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case getUserAccPending:
            return { ...state, pending: true };
        case getUserAccRejected:
            return { ...state, pending: false, error: action.error };
        case getUserAccFullfiled:
            return { amount: action.payload, pending: false };
        case increment:
            return { amount: state.amount + 1 };
        case decrement:
            return { amount: state.amount - 1 };
        case incrementByVal:
            return { amount: state.amount + action.payload };
        default:
            return state;
    }
}

function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incrementBonus:
            return { points: state.points + 1 };
        case incrementByVal:
            if (action.payload >= 100)
                return { points: state.points + 1 };
        default:
            return state;
    }
}

// async api call
function getUserAccount(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(getUserAccPendingFn());
            const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
            dispatch(getUserAccFullfiledFn(data.amount));
        } catch (error) {
            dispatch(getUserAccRejectedFn(error.message));
        }
    }
}

// action creators
function getUserAccPendingFn() {
    return { type: getUserAccPending };
}

function getUserAccFullfiledFn(value) {
    return { type: getUserAccFullfiled, payload: value };
}

function getUserAccRejectedFn(error) {
    return { type: getUserAccRejected, error: error };
}

function incrementFn() {
    return { type: increment };
}

function decrementFn() {
    return { type: decrement };
}

function incrementByValFn(value) {
    return { type: incrementByVal, payload: value };
}

function incrementBonusFn() {
    return { type: incrementBonus };
}

store.dispatch(getUserAccount(1));
