import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Regulation from "../pages/Regulation";
import Faq from "../pages/Faq";
import Areas from "../pages/Areas";
import Experiencies from "../pages/Experiencies";
import Housing from "../pages/Housing";
import Visit from "../pages/Visit";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/bioparque" element={<About />} />
			<Route path="/reglamento" element={<Regulation />} />
			<Route path="/faq" element={<Faq />} />
			<Route path="/areas" element={<Areas />} />
			<Route path="/experiencias-areas" element={<Experiencies />} />
			<Route path="/hospedaje" element={<Housing />} />
			<Route path="/tu-visita" element={<Visit />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/contacto" element={<Contact />} />
		</Routes>
	);
}
