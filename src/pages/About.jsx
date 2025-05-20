import React from "react";
import BannerAbout from "../components/BannerAbout"; // ✅ Composant
import bannerAboutImage from "../assets/banner-about.png"; // ✅ Image

function About() {
	return (
		<>
			<BannerAbout image={bannerAboutImage} />
			{/* Le reste de ta page "À propos" */}
		</>
	);
}

export default About;
