import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = document.getElementById('root');
const timeToken = new Date();
const cookies = Cookies.get();

// console.error = () => { };
// console.warn = () => { };
// console.info = () => { };
// console.log = () => { };
// console.trace = () => { };
// console.debug = () => { };

if (timeToken.getHours() < new Date().getHours()) {
	localStorage.removeItem('token');
	Cookies.remove(cookies);
	localStorage.clear();
	sessionStorage.clear();
}

const render = () => {
	ReactDOM.createRoot(root).render(
		<App />
	);
};

render();
// reportWebVitals();
