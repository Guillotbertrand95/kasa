import { useState } from "react";
import "../styles/carousel.scss";

const Carousel = ({ pictures }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? pictures.length - 1 : prev - 1
		);
	};
	const nextSlide = () => {
		setCurrentIndex((prev) =>
			prev === pictures.length - 1 ? 0 : prev + 1
		);
	};
	return (
		<div className="carousel">
			<img
				src={pictures[currentIndex]}
				alt={`Appartement ${currentIndex + 1}`}
				className="carousel-image"
			/>
			{pictures.length > 1 && (
				<>
					<button className="prev" onClick={prevSlide}>
						&lt;
					</button>
					<button className="next" onClick={nextSlide}>
						&gt;
					</button>
					<div className="counter">
						{currentIndex + 1}/{pictures.length}
					</div>
				</>
			)}
		</div>
	);
};

export default Carousel;
