import { Link } from "react-router-dom";

function Card({ logement }) {
	return (
		<Link to={`/apartment/${logement.id}`} className="card">
			<img src={logement.cover} alt={logement.title} />
			<h3>{logement.title}</h3>
		</Link>
	);
}
