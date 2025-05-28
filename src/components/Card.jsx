import { Link } from "react-router-dom";
import "../styles/card.scss";

function Card({ logement }) {
	return (
		<Link to={`/apartment/${logement.id}`} className="card">
			<div className="card-image-container">
				<img
					src={logement.cover}
					alt={logement.title}
					className="image-appart"
				/>
				<h3 className="card-title">{logement.title}</h3>
			</div>
		</Link>
	);
}
export default Card;
