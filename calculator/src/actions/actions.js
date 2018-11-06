import * as types from './actionTypes';

export const clear = () => ({ type: types.CLEAR });
export const toggleNegative = () => ({type: types.TOGGLE_NEGATIVE});
export const percentage = () => ({type: types.PERCENTAGE});
export const deleteCurrentValue = () => ({type: types.DELETE_CURRENT_VALUE});
export const memoryClear = () => ({type: types.MEMORY_CLEAR});
export const memoryStorage = () => ({type: types.MEMORY_STORAGE});
export const memoryRetrieval = () => ({type: types.MEMORY_RETRIEVAL});
export const setOperator = (operator) => ({type: types.SET_OPERATOR, operator});
export const enterNumber = (number) => ({type: types.ENTER_NUMBER, number});
export const evaluate = () => ({type: types.EVALUATE});