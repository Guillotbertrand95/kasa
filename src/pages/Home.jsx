import React from "react";
import BannerHome from "../components/BannerHome";
import bannerHome from "../assets/banner-home.png";
import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<BannerHome
				image={bannerHome}
				text="Chez vous, partout et ailleurs"
			/>
			{/* Le reste de ta page d’accueil */}
		</>
	);
	<div className="home">
		{data.map((item) => (
			<Link eky={item.id} to={`/appartement/${item.id}`}>
				<Card logement={item} />
			</Link>
		))}
	</div>;
}

export default Home;
