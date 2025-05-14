import React from "react";
import Banner from "../components/Banner";
import bannerHome from "../assets/banner-home.png";

function Home() {
	return (
		<>
			<Banner image={bannerHome} text="Chez vous, partout et ailleurs" />
			{/* Le reste de ta page d’accueil */}
		</>
	);
}

export default Home;
