import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Apartment from "./pages/Apartment";
import Error from "./pages/Error";
import Layout from "./components/Layout";

function App() {
	return (
		<Routes>
			{/* Toutes ces routes utilisent le Layout avec le Navbar */}
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/apartment/:id" element={<Apartment />} />
			</Route>

			{/* Page erreur sans layout */}
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App;
