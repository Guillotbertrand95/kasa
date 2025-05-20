import React from "react";
import logo from "../assets/logoF.png";

const Footer = () => {
	return (
		<footer className="footer">
			<img src={logo} alt="Logo du site" className="logoF" />
			<p>© 2025 Kasa. Tous droits réservés.</p>
		</footer>
	);
};

export default Footer;
