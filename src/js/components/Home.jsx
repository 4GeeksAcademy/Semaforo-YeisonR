import React, { useState } from "react";

//create your first component

const Home = () => {

	const [selectedColor, setSelectedColor] = useState("green");

	return (
		<div>
			<h1 className="text-center mt-5">SEMÁFORO</h1>

			<div className="traffic-light">


				<div
					onClick={() => setSelectedColor("red")}
					className={
						"light red" + (selectedColor === "red" ? " glow" : "")
					}></div>

				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						"light yellow" + (selectedColor === "yellow" ? " glow" : "")
					}></div>

				<div
					onClick={() => setSelectedColor("green")}
					className={
						"light green" + (selectedColor === "green" ? " glow" : "")
					}></div>


			</div>
		</div>
	);
};

export default Home;