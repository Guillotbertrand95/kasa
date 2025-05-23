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
						Nos équipes se tiennent à votre disposition pour vous
						fournir une expérience parfaite. N'hésitez pas à nous
						contacter si vous avez la moindre question.
					</p>
				</Collapse>

				<Collapse title="Sécurité">
					<p>
						La sécurité est la priorité de Kasa. Nous assurons aussi
						bien la sécurité des logements que celle de nos
						utilisateurs avec un système de double authentification
						et un support réactif 24/7.
					</p>
				</Collapse>
			</div>
		</>
	);
}

export default About;
