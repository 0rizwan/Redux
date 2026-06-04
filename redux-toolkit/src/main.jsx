import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import accountReducer from './slices/accountSlice.js'
import bonusReducer from './slices/bonusSlice.js'
import { rewardReducer } from './reducers/reward.js'
import { adminApi } from './api/adminSlice.js'

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward: rewardReducer,
    [adminApi.reducerPath]: adminApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(adminApi.middleware)
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
