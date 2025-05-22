import { Link } from "react-router-dom";
import data from "../data/logements.json";
import BannerHome from "../components/BannerHome";
import Card from "../components/Card";
import bannerHome from "../assets/banner-home.png";
import "../styles/home.scss";

function Home() {
	return (
		<>
			<BannerHome
				image={bannerHome}
				text="Chez vous, partout et ailleurs"
			/>

			<div className="cards-container">
				{data.slice(0, 6).map((item) => (
					<div key={item.id} className="card-wrapper">
						<Card logement={item} />
					</div>
				))}
			</div>
		</>
	);
}

export default Home;
