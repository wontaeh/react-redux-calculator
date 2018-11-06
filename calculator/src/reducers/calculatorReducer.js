import * as types from '../actions/actionTypes';
import { calculate } from "../util";

const initialState = {
	currentValue: "", 
	operator: null, 
	previousValue: 0,
	resetDisplay: false,
	memory:"",
};

export default function calculatorReducer( state = initialState, action ) {
	switch ( action.type ) {
		case types.ENTER_NUMBER:
			return {
				...state,
				currentValue: state.resetDisplay ? action.number.toString() : `${ state.currentValue }${ action.number }`,
				resetDisplay: false,
			};
		case types.SET_OPERATOR:
			return {
				...state,
				operator: action.operator,
				previousValue: state.operator ? calculate(state.previousValue, parseFloat(state.currentValue), state.operator) : parseFloat(state.currentValue),
				resetDisplay: true,
			};
		case types.PERCENTAGE:
			return {
				...state,
				currentValue: (parseFloat(state.currentValue) / 100).toString()
			};
		case types.CLEAR:
			return {
				...state,
				currentValue: "",
				operator: null,
				previousValue: 0,
				resetDisplay: false,
			};
		case types.EVALUATE:
			return {
				...state,
				currentValue: calculate(state.previousValue, parseFloat(state.currentValue), state.operator).toString(),
				operator: null,
				previousValue: 0,
				resetDisplay: true,
			};
		case types.TOGGLE_NEGATIVE:
			return {
				...state,
				currentValue: (-parseFloat(state.currentValue)).toString()
			};
		case types.DELETE_CURRENT_VALUE:
			return {
				...state,
				currentValue: state.currentValue.substring(0, state.currentValue.length-1)
			}
		case types.MEMORY_CLEAR:
			return {
				...state,
				memory: ""
			}
		case types.MEMORY_STORAGE:
			return {
				...state,
				memory: state.currentValue
			}
		case types.MEMORY_RETRIEVAL:
			return {
				...state,
				currentValue: calculate(parseFloat(state.currentValue), parseFloat(state.memory), state.operator).toString(),
				operator: null,
				previousValue: 0,
				resetDisplay: true,
			};
		default:
			return state;
	}
}