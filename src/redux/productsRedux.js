/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getCompared = ({ products }) => {
  return products.filter(item => item.compare === true);
};
export const getHotDeals = ({ products }) =>
  products.filter(product => product.hotDeal);

export const getHotDeals_Slider = ({ hotdeals_slider }) => hotdeals_slider;

export const toggleCompare = (products, id) =>
  products.map(product => {
    if (product.id === id) {
      product.compare = !product.compare;
    }
    return product;
  });

export const getProductById = ({ products }, productId) => {
  products.filter(product => product.id === productId);

  return products.length ? products[0] : { error: true };
};

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getGalleryCategories = ({ galleryCategories }) => galleryCategories;
export const getGalleryPromoProduct = ({ galleryPromoProduct }) => galleryPromoProduct;
//export const getQuickView = ({products}) => products;

// action name creator
const createActionName = name => `product/rating/${name}`;

const reducerName = 'products';
const actionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_RATING = createActionName('SET_RATING');
const CHANGE_COMPARE = createActionName('CHANGE_COMPARE');
const SET_FAVOURITE = actionName('SET_FAVOURITE');

// action creators
export const setRating = payload => ({ payload, type: SET_RATING });
export const changeCompare = payload => ({ payload, type: CHANGE_COMPARE });
export const setFavourite = payload => ({ payload, type: SET_FAVOURITE });

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
    case SET_FAVOURITE:
      return [
        ...statePart,
        (statePart[statePart.findIndex(el => el.id === action.payload.id)].favourite =
          action.payload.isFavourite),
      ];
    default:
      return statePart;
  }
}
