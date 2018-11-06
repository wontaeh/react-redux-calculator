import { calculate } from "../util";

test( "calculate with ADD operator", () => {
	expect(calculate(1, 1, "+")).toBe(2);
	expect(calculate(5, 5, "+")).toBe(10);
} );

test( "calculate with DIVIDE operator", () => {
	expect(calculate(10, 2, "/")).toBe(5);
	expect(calculate(33, 3, "/")).toBe(11);
} );

test( "calculate with MULTIPLY operator", () => {
	expect(calculate(5, 5, "*")).toBe(25);
	expect(calculate(2, 50, "*")).toBe(100);
} );

test( "calculate with SUBTRACT operator", () => {
	expect(calculate(25,5, "-")).toBe(20);
	expect(calculate(15,5, "-")).toBe(10);
} );

test( "calculate return ERROR message", () => {
	expect(calculate(1,100,undefined)).toBe("ERROR");
} );