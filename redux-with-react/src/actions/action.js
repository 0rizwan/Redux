import axios from 'axios';

// constant action names
// const init = "accounts/init";

export const increment = 'accounts/increment';
export const decrement = 'accounts/decrement';
export const incrementByVal = 'accounts/incrementByVal';
export const getUserAccPending = 'accounts/pending';
export const getUserAccFullfiled = 'accounts/fullfiled';
export const getUserAccRejected = 'accounts/rejected';
export const incrementBonus = 'bonus/incrementBonus';

// async api call
export function getUserAccount(id) {
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
export function getUserAccPendingFn() {
    return { type: getUserAccPending };
}

export function getUserAccFullfiledFn(value) {
    return { type: getUserAccFullfiled, payload: value };
}

export function getUserAccRejectedFn(error) {
    return { type: getUserAccRejected, error: error };
}

export function incrementFn() {
    return { type: increment };
}

export function decrementFn() {
    return { type: decrement };
}

export function incrementByValFn(value) {
    return { type: incrementByVal, payload: value };
}

export function incrementBonusFn() {
    return { type: incrementBonus };
}