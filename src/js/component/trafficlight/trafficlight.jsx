import React from "react";
import PropTypes from "prop-types";
import "./trafficlight.css";

export const TrafficLight = (props) => {
	return (
		<div
			className={props.figura + " " + props.color + " " + props.glow}
			onClick={props.onPress}></div>
	);
};

TrafficLight.propsTypes = {
	figura: PropTypes.string,
	color: PropTypes.string,
	glow: PropTypes.string,
};
