import React from 'react'
import ReactDOM from 'react-dom/client'
import { store, persistor } from './redux/Store'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading..."} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
