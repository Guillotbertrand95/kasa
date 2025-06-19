import { useParams, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../data/logements.json"; // Ton fichier de logements
import "../styles/apartment.scss"; // Style spécifique à la page
import Collapse from "../components/Collapse";
import Star from "../components/Star"; // adapte le chemin si besoin
import Rating from "../components/Rating"; // adapte le chemin si besoin
import Carousel from "../components/Carousel";

// ...

function Apartment() {
	const { id } = useParams();
	const logement = data.find((item) => item.id === id);
	console.log("ID URL :", id);

	if (!logement) {
		// Si aucun logement trouvé, redirige vers une page 404
		return <Navigate to="/404" />;
	}

	return (
		<div className="apartment-details">
			{/* Image principale */}

			<Carousel pictures={logement.pictures} />

			<div className="apartment-header">
				<div className="apartment-info">
					<h1>{logement.title}</h1>
					<h2>{logement.location}</h2>

					<div className="tags">
						{logement.tags.map((tags, index) => (
							<span key={index} className="tag-item">
								{tags}
							</span>
						))}
					</div>
				</div>

				<div className="host-rating">
					<div className="host">
						<p className="host-name">{logement.host.name}</p>
						<img
							src={logement.host.picture}
							alt={logement.host.name}
							className="host-picture"
						/>
					</div>

					<div className="rating">
						<Rating score={parseInt(logement.rating)} />
					</div>
				</div>
			</div>
			<div className="description-container">
				<div className="description">
					<Collapse title="Description">
						<p>{logement.description}</p>
					</Collapse>
				</div>
				<div className="equipement">
					<Collapse title="Équipements">
						<ul>
							{logement.equipments.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</Collapse>
				</div>
			</div>
		</div>
	);
}

export default Apartment;
