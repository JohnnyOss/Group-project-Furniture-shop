/* selectors */
export const getCurrency = currency => currency;

/* action name creator */
const reducerName = 'currency';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_CURRENCY = createActionName('SET_CURRENCY');

// action creators
export const setCurrency = payload => ({ payload, type: SET_CURRENCY });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_CURRENCY:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}
