import Star from "./Star";

const Rating = ({ score }) => {
	return (
		<div className="rating">
			{[1, 2, 3, 4, 5].map((star) => (
				<Star key={star} filled={star <= score} />
			))}
		</div>
	);
};

export default Rating;
