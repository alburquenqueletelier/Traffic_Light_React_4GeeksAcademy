import React, { useEffect, useState } from "react";
import "../component/trafficbody.css";
import { TrafficLight } from "./trafficlight/trafficlight.jsx";

//create your first component
const TrafficBody = (props) => {
	const [colorElegido, setColorElegido] = useState(null);
	const [playStatus, setPlayStatus] = useState(false);
	const [extraLight, setExtraLight] = useState(false);

	useEffect(() => {
		if (playStatus) {
			const interval = setInterval(() => {
				if (extraLight) {
					if (colorElegido == "purple") glow("green");
					if (colorElegido == "red") glow("purple");
					if (colorElegido == "yellow") glow("red");
					if (colorElegido == "green") glow("yellow");
				} else {
					if (colorElegido == "red") glow("green");
					if (colorElegido == "yellow") glow("red");
					if (colorElegido == "green") glow("yellow");
				}
				if (!colorElegido) glow("green");
			}, 3000);
			return () => clearInterval(interval);
		}
	});

	function glow(color) {
		return setColorElegido(color);
	}

	function playTraffic() {
		if (playStatus) {
			return setPlayStatus(false);
		} else {
			return setPlayStatus(true);
		}
	}

	function addExtraLight() {
		if (extraLight) return setExtraLight(false);
		else return setExtraLight(true);
	}

	return (
		<>
			<div className="stick"></div>
			<div className="trafficBody">
				<TrafficLight
					figura="trafficLight"
					color="red"
					glow={colorElegido === "red" ? "glow" : ""}
					onPress={() => glow("red")}></TrafficLight>
				<TrafficLight
					figura="trafficLight"
					color="yellow"
					glow={colorElegido === "yellow" ? "glow" : ""}
					onPress={() => glow("yellow")}
				/>
				<TrafficLight
					figura="trafficLight"
					color="green"
					glow={colorElegido === "green" ? "glow" : ""}
					onPress={() => glow("green")}
				/>
				{extraLight ? (
					<TrafficLight
						figura="trafficLight"
						color="purple"
						glow={colorElegido === "purple" ? "glow" : ""}
						onPress={() => glow("purple")}
					/>
				) : (
					""
				)}
			</div>
			<div className="buttonDiv">
				<button
					type="button"
					className={
						playStatus
							? "btn btn-danger mt-3"
							: "btn btn-primary mt-3"
					}
					onClick={playTraffic}>
					{playStatus ? "Stop Traffic" : "Play Traffic"}
				</button>
				<button
					type="button"
					className={
						extraLight
							? "btn btn-danger mt-3 ms-2"
							: "btn btn-primary mt-3 ms-2"
					}
					onClick={addExtraLight}>
					{extraLight ? "Remove Purple Light" : "Add Purple Light"}
				</button>
			</div>
		</>
	);
};

export default TrafficBody;
