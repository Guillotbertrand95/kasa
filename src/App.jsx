import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Layout from "./components/Layout";

function App() {
	return (
		<Routes>
			{/* Routes avec le layout */}
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Route>

			{/* Route sans layout (ex : erreur) */}
			<Route path="*" element={<Error />} />
		</Routes>
	);
}
export default App;
