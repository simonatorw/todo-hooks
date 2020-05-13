import actionTypes from './actionTypes';

export const add = (payload) => ({ type: actionTypes.ADD, payload });

export const remove = (payload) => ({ type: actionTypes.REMOVE, payload });