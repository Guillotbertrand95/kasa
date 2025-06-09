import React from "react";
import BannerAbout from "../components/BannerAbout";
import bannerAboutImage from "../assets/banner-about.png";
import Collapse from "../components/Collapse.jsx";
import "../styles/about.scss"; // seulement si le fichier existe

function About() {
	return (
		<>
			<BannerAbout image={bannerAboutImage} />

			<div className="about-container">
				<Collapse title="Fiabilité">
					<p>
						Les annonces postées sur Kasa garantissent une fiabilité
						totale. Les photos sont conformes aux logements, et
						toutes les informations sont régulièrement vérifiées par
						nos équipes.
					</p>
				</Collapse>

				<Collapse title="Respect">
					<p>
						La bienveillance fait partie des valeurs fondatrices de
						Kasa. Tout comportement discriminatoire ou de
						perturbation du voisinage entraînera une exclusion
						immédiate de notre plateforme.
					</p>
				</Collapse>

				<Collapse title="Service">
					<p>
						La qualité du service est au coeur de notre engagement
						chez Kasa. Nous veillons à ce que chaque interaction,
						que ce soit avec nos hôtes ou nos locataires, soit
						empreinte de respect et de bienveillance.
					</p>
				</Collapse>

				<Collapse title="Sécurité">
					<p>
						La sécurité est la priorité de Kasa. Aussi bien pour nos
						Hôtes que pour les voyageurs, chzaque logement
						correspond aux critère de sécurité établis par nos
						services. En laissant une note aussi bien à l'hôte qu'au
						locataire, cela permet à nos équipes de vérifier que les
						standars sont bien respectés. Nous organisons également
						des ateliers sur la sécurité domestique pour nos hôtes.
					</p>
				</Collapse>
			</div>
		</>
	);
}

export default About;
