import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';

const mount = (el) => {
    ReactDOM.render(<App />, el);
}

if (!window.containerContext) {
    mount(document.getElementById('root'));
}

export { mount };