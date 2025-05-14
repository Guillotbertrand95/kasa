import { useParams, Navigate } from "react-router-dom";
import data from "../data/logements.json"; // Ton fichier de logements
import "../styles/apartment.scss"; // Ajoute un style propre à cette page

function Apartment() {
	const { id } = useParams();
	const logement = data.find((item) => item.id === id);

	if (!logement) {
		// Si aucun logement trouvé, redirige vers une page 404
		return <Navigate to="/404" />;
	}

	return (
		<div className="apartment-details">
			<h1>{logement.title}</h1>
			<p>{logement.location}</p>
			{/* Ajoute ici les photos, description, rating, équipements, etc. */}
		</div>
	);
}

export default Apartment;
