import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { StateProvider } from './state';
import reducer from './reducers';

const initialState = {
    smurfs: [],
};

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>,
    document.getElementById('root')
);
