import React from 'react';
import ReactDOM from 'react-dom/client';
import PWA from './PWA'
import * as serviceWorkerRegistration from './services/serviceWorkerRegistration';
import reportWebVitals from './services/reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
        <BrowserRouter>
            <PWA/>
        </BrowserRouter>
);

serviceWorkerRegistration.register();
reportWebVitals();
