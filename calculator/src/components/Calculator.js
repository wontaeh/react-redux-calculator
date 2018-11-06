import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from './../actions/actions';
import CalculatorButton from "./CalculatorButton";
import "./Calculator.css";

export class Calculator extends Component {
	render() {
		const { 
			enterNumber, setOperator, percentage, clear, evaluate, toggleNegative, 
			deleteCurrentValue, memoryClear, memoryStorage, memoryRetrieval 
		} = this.props;
    const { memory, currentValue } = this.props.state; 
		return (
			<div className="flex-container">
        <div className='cal-container'>
          <div className='cal-top'>memory: {memory}</div>
          <div className='cal-top'>{currentValue}</div>
          <div className='cal-keys'>
						<CalculatorButton callback={clear} value="AC" />
						<CalculatorButton callback={toggleNegative} value="+/-" />
						<CalculatorButton callback={percentage} value="%" />
						<CalculatorButton callback={deleteCurrentValue} value="delete" />
						<CalculatorButton callback={memoryClear} value="MC" />
						<CalculatorButton callback={memoryStorage} value="MS" />
						<CalculatorButton callback={memoryRetrieval} value="MR" />
						<CalculatorButton callback={() => setOperator("/")} value="/" />
						<CalculatorButton callback={() => enterNumber(7)} value="7" />
						<CalculatorButton callback={() => enterNumber(8)} value="8" />
						<CalculatorButton callback={() => enterNumber(9)} value="9" />
						<CalculatorButton callback={() => setOperator("*")} value="*" />
						<CalculatorButton callback={() => enterNumber(4)} value="4" />
						<CalculatorButton callback={() => enterNumber(5)} value="5" />
						<CalculatorButton callback={() => enterNumber(6)} value="6" />
						<CalculatorButton callback={() => setOperator("-")} value="-" />
						<CalculatorButton callback={() => enterNumber(1)} value="1" />
						<CalculatorButton callback={() => enterNumber(2)} value="2" />
						<CalculatorButton callback={() => enterNumber(3)} value="3" />
						<CalculatorButton callback={() => setOperator("+")} value="+" />
						<CalculatorButton callback={() => enterNumber(0)} value="0" buttonType="cal-zero"/>
						<CalculatorButton callback={() => currentValue.includes(".") ? null : enterNumber(".")} value="." />
						<CalculatorButton callback={evaluate} value="=" />
          </div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  state: state.state
 })
 const mapDispatchToProps = dispatch => ({
	clear: () => dispatch(actions.clear()),
	toggleNegative: () => dispatch(actions.toggleNegative()),
  percentage: () => dispatch(actions.percentage()),
	deleteCurrentValue: () => dispatch(actions.deleteCurrentValue()),
	memoryClear: () => dispatch(actions.memoryClear()),
	memoryStorage: () => dispatch(actions.memoryStorage()),
	memoryRetrieval: () => dispatch(actions.memoryRetrieval()),
  setOperator: (operator) => dispatch(actions.setOperator(operator)),
  enterNumber: (number) => dispatch(actions.enterNumber(number)),
  evaluate: () => dispatch(actions.evaluate()),
 })

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);