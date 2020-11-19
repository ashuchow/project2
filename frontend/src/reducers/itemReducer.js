/* eslint-disable import/no-anonymous-default-export */
import { DELETE_ITEM, FETCH_ITEMS, NEW_ITEM } from "../actions/types";

const intialState = {
  items: [],
  item: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_ITEM:
      return {
        ...state,
        item: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
