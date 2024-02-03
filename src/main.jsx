import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css'
import './assets/synfusion.css'

import { registerLicense } from '@syncfusion/ej2-base';
registerLicense(import.meta.env.VITE_LICENSE_KEY_SYNCFUSION);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
