import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(React.StrictMode, null,
        React.createElement(App, null)));
}
else {
    console.error('Root element no found');
}
