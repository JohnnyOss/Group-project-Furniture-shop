//selectors

export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getCompared = ({ products }) => {
  return products.filter(item => item.compare === true);
};

export const toggleCompare = (products, id) =>
  products.map(product => {
    if (product.id === id) {
      product.compare = !product.compare;
    }
    return product;
  });

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getGalleryCategories = ({ galleryCategories }) => galleryCategories;
export const getGalleryPromoProduct = ({ galleryPromoProduct }) => galleryPromoProduct;

// action name creator
const createActionName = name => `product/rating/${name}`;

// action types
export const SET_RATING = createActionName('SET_RATING');
const CHANGE_COMPARE = createActionName('CHANGE_COMPARE');

// action creators
export const setRating = payload => ({ payload, type: SET_RATING });
export const changeCompare = payload => ({ payload, type: CHANGE_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_COMPARE: {
      const prepareProducts = toggleCompare(statePart, action.payload);
      return prepareProducts;
    }
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
    default:
      return statePart;
  }
}
