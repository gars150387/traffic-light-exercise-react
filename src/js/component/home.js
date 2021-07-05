import React from "react";
import Lights from "./lights";
import { useEffect, useState } from "react";

export function Home() {
	const [color, setColor] = useState("black");

	const handleClick = () => {
		setColor("red");
		const [color, setColor] = useState("black");
	};

	const handleClick2 = () => {
		setColor("yellow");
		const [color, setColor] = useState("black");
	};

	const handleClick3 = () => {
		setColor("green");
	};

	return (
		<div className="d-block mt-5 border-rounded">
			<button
				onClick={handleClick}
				className="btn-dark btn-large"
				style={{ width: "80px", height: "80px" }}></button>
			<button
				onClick={handleClick2}
				className="btn-dark btn-large"
				style={{ width: "80px", height: "80px" }}></button>
			<button
				onClick={handleClick3}
				className="btn-dark btn-large"
				style={{ width: "80px", height: "80px" }}></button>
		</div>
	);
}
