import React from "react";
import "../styles/banner-about.scss";
import "../assets/banner-about.png";
function BannerAbout({ image }) {
	return (
		<div
			className="banner-about"
			style={{ backgroundImage: `url("${image}")` }}
		></div>
	);
}

export default BannerAbout;
