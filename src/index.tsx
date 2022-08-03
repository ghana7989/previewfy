import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<div className='container m-auto'>
			<Navbar />
			<App />
		</div>
	</React.StrictMode>,
);
