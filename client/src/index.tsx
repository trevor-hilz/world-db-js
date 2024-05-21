import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element no found');
}