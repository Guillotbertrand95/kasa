import React from "react";
import "../styles/banner-about.scss";

function BannerAbout({ image }) {
	return (
		<div
			className="banner-about"
			style={{ backgroundImage: `url("${image}")` }}
		></div>
	);
}

export default BannerAbout;
