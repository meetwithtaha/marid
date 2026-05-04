export const BASE_URL = 'https://marid.tech-brit.co.uk';
const api = '/api/';

export enum EndPointConstants {
  onboarding = 'onboarding-slides',
  login = 'auth/login',
  signup = 'auth/register',
  home = 'catalog/home',
  services = 'catalog/categories?event_type_id=',
  serviceItems = 'catalog/items/',

  // add to Cart
  addToCart = 'cart/items',
  cart = 'cart',
  cartItem = 'cart/items/',
}

export const getEndpointUrl = (endPoint: EndPointConstants): string => {
  return `${api}${endPoint}`;
};
