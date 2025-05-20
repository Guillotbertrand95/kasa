import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/layout.scss";

function Layout() {
	const location = useLocation();

	// Déterminer la page : home ou about ou autre
	const currentPage =
		location.pathname === "/" ? "home" : location.pathname.slice(1);

	return (
		<div className={`layout page-${currentPage}`}>
			<Navbar />
			<main className="main-content">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
