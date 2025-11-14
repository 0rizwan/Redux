import { applyMiddleware, createStore } from "redux";
import pkg from 'redux-logger';
const { createLogger, logger } = pkg;

// we have two options for the loggger - 
// 1) default logger 
// 2) create a logger instance

// const logger = createLogger();

// action names
const increment = "increment";
const decrement = "decrement";
const incrementByVal = "incrementByVal";

// store 
const store = createStore(reducer, applyMiddleware(logger));

// const history = [];

// reducer
function reducer(state = { num: 1 }, action) {
    if (action.type == increment) {
        // state.num = state.num + 1;  not a correct way as it will always update the same state
        return { num: state.num + 1 };
    }
    if (action.type == decrement) {
        return { num: state.num - 1 };
    }
    if (action.type == incrementByVal) {
        return { num: state.num + action.value };
    }
    return state;
}

// global state
// everytime event gets dispatched this runs
// store.subscribe(() => {
//     history.push(store.getState());
//     console.log(history);
// })

// action creators
function incrementFn() {
    return { type: increment };
}

function decrementFn() {
    return { type: decrement };
}

function incrementByValFn(val) {
    return { type: incrementByVal, value: val };
}

setInterval(() => {
    // store.dispatch({ type: 'incrementByVal', dummy: 5 })
    store.dispatch(incrementByValFn(10));
}, 1000);

// to get the value of current state we can use 'store.getState()'
console.log(store.getState());
