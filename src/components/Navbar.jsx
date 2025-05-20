import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoF.png"; // adapte le chemin si besoin
import "../styles/navbar.scss"; // à créer si pas encore fait

function Navbar() {
	return (
		<header className="navbar">
			<img src={logo} alt="Logo du site" className="navbar-logo" />

			<nav className="navbar-links">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? "active-link" : ""
					}
				>
					Accueil
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive ? "active-link" : ""
					}
				>
					A propos
				</NavLink>
			</nav>
		</header>
	);
}

export default Navbar;
