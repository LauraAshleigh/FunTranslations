import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'
import LanguageProvider from './context/language-context'
import LoadingProvider from './context/loading-context'
import './index.css'

ReactDOM.render(
    <LoadingProvider>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </LoadingProvider>, 
document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
