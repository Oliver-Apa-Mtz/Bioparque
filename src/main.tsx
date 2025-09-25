import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/config.router.tsx";
import ScrollToTop from './components/ScrollToTop';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<Router />
		</BrowserRouter>
	</React.StrictMode>,
)
