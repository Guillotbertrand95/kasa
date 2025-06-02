import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
				<Route path="404" element={<Error />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Route>
		</Routes>
	);
}

export default App;
