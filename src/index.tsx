import React from 'react';
import ReactDOM from 'react-dom/client';
import PWA from './PWA'
import * as serviceWorkerRegistration from './services/serviceWorkerRegistration';
import reportWebVitals from './services/reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
            <PWA/>
    </React.StrictMode>
);

serviceWorkerRegistration.register();
reportWebVitals();
