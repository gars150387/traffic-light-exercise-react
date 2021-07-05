import React from "react";

const lights = ({ color }) => {
	return (
		<button onClick={color} type="button" className="btn btn-lg">
			{color}
		</button>
	);
};

export default lights;
