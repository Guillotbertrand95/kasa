import { useParams, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../data/logements.json"; // Ton fichier de logements
import "../styles/apartment.scss"; // Style spécifique à la page

function Apartment() {
	<>
		<Navbar />
	</>;
	const { id } = useParams();
	const logement = data.find((item) => item.id === id);
	console.log("ID URL :", id);

	if (!logement) {
		// Si aucun logement trouvé, redirige vers une page 404
		return <Navigate to="/404" />;
	}

	return (
		<div className="apartment-details">
			<h1>{logement.title}</h1>
			<img src={logement.cover} alt={logement.title} />
			<h2>{logement.location}</h2>

			{/* Ajoute ici les photos, description, rating, équipements, etc. */}
		</div>
	);
}

export default Apartment;
