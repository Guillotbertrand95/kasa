import React from "react";
import "../styles/banner.scss"; // à adapter selon ton arborescence

function Banner({ image, text }) {
	return (
		<div className="banner" style={{ backgroundImage: `url(${image})` }}>
			{text && <h1 className="banner-text">{text}</h1>}
		</div>
	);
}

export default Banner;
