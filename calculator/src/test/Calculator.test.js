import calculatorReducer from "../reducers/calculatorReducer";
import * as actions from './../actions/actions';

test("clear returns an object with type CLEAR", () => {
	expect(actions.clear()).toEqual({ type: "CLEAR" });
});

test("enterNumber returns an object with type ENTER_NUMBER and a number", () => {
	expect(actions.enterNumber( 1 )).toEqual({number: 1, type: "ENTER_NUMBER"});
	expect(actions.enterNumber( 2 )).toEqual({number: 2, type: "ENTER_NUMBER"});
});

test("evaluate returns an object with type EVALUATE", () => {
	expect(actions.evaluate()).toEqual({ type: "EVALUATE" });
});

test("percentage returns an object with type PRECENTAGE", () => {
	expect(actions.percentage()).toEqual({ type: "PERCENTAGE" });
});

test("setOperator returns an object with type SET_OPERATOR and an operator", () => {
	expect(actions.setOperator( "+" )).toEqual({operator: "+", type: "SET_OPERATOR"});
	expect(actions.setOperator( "/" )).toEqual({operator: "/", type: "SET_OPERATOR"});
	expect(actions.setOperator( "-" )).toEqual({operator: "-", type: "SET_OPERATOR"});
	expect(actions.setOperator( "*" )).toEqual({operator: "*", type: "SET_OPERATOR"});
});

test("toggleNegative returns an object with type TOGGLE_NEGATIVE", () => {
	expect(actions.toggleNegative()).toEqual({ type: "TOGGLE_NEGATIVE"});
});

test("calculatorReducer has initial state", () => {
	expect(calculatorReducer(undefined, {})).toEqual(
		{
			currentValue: "", 
			operator: null, 
			previousValue: 0,
			resetDisplay: false,
			memory:"",
		} 
	);
});

test("calculatorReducer handles ENTER_NUMBER actions when currentValue === '0'", () => {
	expect(calculatorReducer(undefined, actions.enterNumber(10))).toEqual(
		{
		  currentValue: "10",
			operator: null,
			previousValue: 0,
			resetDisplay: false,
			memory:"",
		}
	);
});

test("calculatorReducer handles ENTER_NUMBER actions when resetDisplay is true", () => {
	expect(calculatorReducer(
		{
			currentValue: "1",
			operator: "+",
			previousValue: 2,
			resetDisplay: true,
			memory:""
		}, 
		actions.enterNumber(3))).toEqual(
		{
		  currentValue: "3",
			operator: "+",
			previousValue: 2,
			resetDisplay: false,
			memory:""
		}
	);
});

test("calculatorReducer sets previousValue to the result of calculate when passed a SET_OPERATOR action and there is an operator on state", () => {
	expect(calculatorReducer(
		{
		  currentValue: "3",
			operator: "+",
			previousValue: 4,
			resetDisplay: false,
			memory:""
		}, 
		actions.setOperator( "-" )).previousValue).toBe(7);
});

test("calculatorReducer passed a PERCENTAGE action divides currentValue by 100", () => {
	expect(calculatorReducer(
		{
		  currentValue: "9",
			operator: "+",
			previousValue: 0,
			resetDisplay: false,
			memory:""
		}, 
		actions.percentage()).currentValue).toBe("0.09");
});

test("calculatorReducer passed a CLEAR action resets to initial state", () => {
	expect(calculatorReducer( 
		{
		  currentValue: "9",
			operator: "+",
			previousValue: 12,
			resetDisplay: false,
			memory:""
		}, 
		actions.clear())).toEqual( 
		{
		  currentValue: "",
			operator: null,
			previousValue: 0,
			resetDisplay: false,
			memory:""
		} 
	);
});


test("calculatorReducer evaluates previousValue and currentValue with operator", () => {
	expect(calculatorReducer( 
		{
		  currentValue: "9",
			operator: "+",
			previousValue: 12,
			resetDisplay: false,
			memory:""
		}, 
		actions.evaluate())).toEqual( 
		{
		  currentValue: "21",
			operator: null,
			previousValue: 0,
			resetDisplay: true,
			memory:""
		} 
	);
});
