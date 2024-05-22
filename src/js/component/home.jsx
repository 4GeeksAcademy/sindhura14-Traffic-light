import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	var [color, setColor] = useState();
	const [purple, setPurple] = useState(false);
  
	function handleClick(e) {
		setColor(e.target.className)
	}
	return (
	  <>
		<div className="lightPole"> </div>
		<div className="trafficLight">
		  <div
			className={`red${color === "red" ? " selected" : ""}`}
			onClick={(e) => setColor("red")}
		  ></div>
		  <div
			className={`yellow${color === "yellow" ? " selected" : ""}`}
			onClick={(e) => setColor("yellow")}
		  ></div>
		  <div
			className={`green${color === "green" ? " selected" : ""}`}
			onClick={(e) => setColor("green")}
		  ></div>
		  <div
			className={`purple ${color === "purple" ? "selected" : ""}`}
			style={purple === false ? { display: "none" } : {}}
			onClick={(e) => setColor("purple")}
		  ></div>
		</div>
		<button
			className="btn btn-secondary toggleButton"
			onClick={() => setPurple(!purple)}
		  >
			Toggle purple light
		  </button>
	  </>
	);
};

export default Home;
