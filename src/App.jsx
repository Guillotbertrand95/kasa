import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			{/* Catch-all : si aucune route ne correspond */}
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App;
