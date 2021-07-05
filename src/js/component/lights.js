import React from "react";
import { prototype } from "module";

const lights = ({ option }) => {
	return (
		<button
			onClick={handleClick}
			className="btn-dark btn-large"
			style={{ width: "80px", height: "80px" }}>
			{option}
		</button>
	);
};

export default lights;
