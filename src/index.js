import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import estanterias from './estanterias'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const tienda = createStore(estanterias)

ReactDOM.render(
<Provider store={tienda}>
    <App />
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
