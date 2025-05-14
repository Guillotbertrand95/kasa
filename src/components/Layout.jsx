import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/layout.scss"; // import du style SCSS global du layout

function Layout() {
	return (
		<div className="layout">
			<Navbar />

			{/* Tu peux placer ici un bouton/menu déroulant global */}
			{/* <MenuToggle /> */}

			<main className="main-content">
				<Outlet /> {/* Ici s'affichent tes pages (Home, About, etc.) */}
			</main>

			<Footer />
		</div>
	);
}

export default Layout;
