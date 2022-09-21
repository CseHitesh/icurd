import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UsersStates from './context/UsersStates.jsx'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>


		<BrowserRouter>
			<UsersStates>


				<App />


			</UsersStates>
		</BrowserRouter>
	</React.StrictMode>
)