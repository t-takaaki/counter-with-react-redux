import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterReducer from './src/reducer'

const store = createStore(counterReducer)

import App from './src/App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") 
)
