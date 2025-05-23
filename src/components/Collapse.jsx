import { useState } from "react";
import "../styles/collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";

const Collapse = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleCollapse = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="Collapse">
			<div className="collapse-header" onClick={toggleCollapse}>
				<h3>{title}</h3>
				<FontAwesomeIcon
					icon={faChevronUp}
					className={`arrow ${isOpen ? "open" : ""}`}
				/>
			</div>
			{isOpen && <div className="collapse-content">{children}</div>}
		</div>
	);
};
export default Collapse;
