import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoH.png"; // adapte le chemin si besoin
import "../styles/Navbar.scss"; // à créer si pas encore fait

function Navbar() {
	return (
		<header className="navbar">
			<img src={logo} alt="Logo du site" className="navbar-logoH" />

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
