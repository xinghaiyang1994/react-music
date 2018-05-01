import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux' 
import thunk from 'redux-thunk'    
import { Provider } from 'react-redux'      

import './assets/css/main.less'
import state from './reducers' 

import App from './App';
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
    state,
    applyMiddleware(thunk)      
)

// setInterval(() => {
//     console.log(store.getState())
// }, 2000)

ReactDOM.render(
    <Provider store={store}>  
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
