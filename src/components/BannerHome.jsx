import React from "react";
import "../styles/banner-home.scss"; // à adapter selon ton arborescence

function BannerHome({ image, text }) {
	return (
		<div
			className="banner-home"
			style={{ backgroundImage: `url("${image}")` }}
		>
			{text && <h1 className="banner-text">{text}</h1>}
		</div>
	);
}

export default BannerHome;
