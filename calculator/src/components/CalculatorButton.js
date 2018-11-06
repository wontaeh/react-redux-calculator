import React from "react";
import PropTypes from 'prop-types';
import "./CalculatorButton.css";

export default function CalculatorButton({callback, value, buttonType}) {
	return (
		<button
			onClick={callback}
			className={`cal-key${buttonType ? " "+buttonType : "" }`}
		>
			{value}
		</button>
	);
}