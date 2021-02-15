//selectors

export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

// action name creator
const createActionName = name => `product/rating/${name}`;

/*action types*/

export const TOGGLE_FAVOURITE = createActionName('TOGGLE_FAVOURITE');
export const SET_RATING = createActionName('SET_RATING');

// action creators
export const setRating = payload => ({ payload, type: SET_RATING });
export const toggleFavourite = payload => ({ payload, type: TOGGLE_FAVOURITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_RATING: {
      const starState = statePart.map(product => {
        if (product.id === action.payload.id) {
          product.stars = action.payload.i;
          product.starRating = true;
          return product;
        } else {
          return product;
        }
      });
      return starState;
    }
    case TOGGLE_FAVOURITE: {
      return statePart.map(product => {
        if (product.id === action.payload.id && product.isFavourite === false) {
          product.isFavourite = true;
        } else if (product.id === action.payload.id && product.isFavourite === true) {
          product.isFavourite = false;
        }
        return product;
      });
    }
    default:
      return statePart;
  }
}
