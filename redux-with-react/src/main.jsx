import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import accountsReducer from './reducers/account.js'
import bonusReducer from './reducers/bonus.js'
import { logger } from 'redux-logger'
import { thunk } from 'redux-thunk'
import { Provider } from 'react-redux'

const store = createStore(
  combineReducers({
    account: accountsReducer,
    bonus: bonusReducer
  }),
  applyMiddleware(logger, thunk)
);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
