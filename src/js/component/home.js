import React from "react";
// import Lights from "./lights";
import { useEffect, useState } from "react";

export function Home() {
	const [color, setColor] = useState("black");
	const [color2, setColor2] = useState("black");
	const [Color3, setColor3] = useState("black");

	const handleClick = () => {
		setColor("red");
	};

	const handleClick2 = () => {
		setColor2("yellow");
	};

	const handleClick3 = () => {
		setColor3("green");
	};

	return (
		<div className="col-6">
			<button
				onClick={handleClick}
				className="btn-dark btn-large"
				style={{ width: "80px", height: "80px" }}>
				{color}
			</button>
			<button
				onClick={handleClick2}
				className="btn-dark btn-large"
				style={{ width: "80px", height: "80px" }}>
				{color2}
			</button>
			<button
				onClick={handleClick3}
				className="btn-dark btn-large"
				style={{ width: "80px", height: "80px" }}>
				{Color3}
			</button>
		</div>
	);
}
