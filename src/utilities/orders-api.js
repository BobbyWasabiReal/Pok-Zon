import sendRequest from "./send-request";

const BASE_URL = "/api/orders";

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addToCart(itemId) {
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, "POST");
}

export function changeQuantity(itemId, qty) {
  return sendRequest(`${BASE_URL}/cart/qty`, "PUT", { itemId, qty });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, "POST");
}

export function getAllForUser() {
  return sendRequest(`${BASE_URL}`);
}