import React from "react";
import Lights from "./lights";
import { useEffect, useState } from "react";

export function Home() {
	const [colorStop, setColor1] = useState("red");
	const [colorWarn, setColor2] = useState("yellow");
	const [colorGo, setColor3] = useState("green");

	useEffect(() => {
		setInterval(() => {
			setColor1(colorStop => colorStop);
		});
	}, []);
	useEffect(() => {
		setInterval(() => {
			setColor2(colorWarn => colorWarn);
		});
	}, []);
	useEffect(() => {
		setInterval(() => {
			setColor3(colorGo => colorGo);
		});
	}, []);
	return (
		<div className="row justify-content-center mt-5 border-rounded">
			<Lights color={colorStop} />
			<Lights color={colorWarn} />
			<Lights color={colorGo} />
		</div>
	);
}
