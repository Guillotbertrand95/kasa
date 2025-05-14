import React from "react";
import Banner from "../components/Banner";
import bannerAbout from "../assets/banner-about.png";

function About() {
	return (
		<>
			<Banner image={bannerAbout} />
			{/* Le reste de ta page "À propos" */}
		</>
	);
}

export default About;
