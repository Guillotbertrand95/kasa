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

			<div className="card-container">
				{data.slice(0, 6).map((item) => (
					<Link key={item.id} to={`/appartement/${item.id}`}>
						<Card logement={item} />
					</Link>
				))}
			</div>
		</>
	);
}

export default Home;
