import React from "react";
<<<<<<< HEAD
import { createRoot }from 'react-dom/client';
import App from './App.jsx';
import axios from "axios";
import './index.css'

createRoot(
document.getElementById("app")).
    render(
        <App />
    )
=======
import * as ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx';
import axios from "axios";
import { RecoilRoot } from 'recoil'

ReactDOM
.createRoot(document.getElementById("app"))
.render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>
)

>>>>>>> 2cbf4b6112fe1d877fd83f275f7bd6e0af0c6de1
axios.defaults.baseURL = "/api";