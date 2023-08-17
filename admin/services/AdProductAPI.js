function apiGetProducts() {
  return axios({
    url: "https://64b7d2f521b9aa6eb0791994.mockapi.io/Products",
    method: "GET",
  });
}

function apiGetProductById(ProductsId) {
  return axios({
    url: `https://64b7d2f521b9aa6eb0791994.mockapi.io/Products/${ProductsId}`,
    method: "GET",
  });
}
function apiCreateProducts(Products) {
  return axios({
    url: "https://64b7d2f521b9aa6eb0791994.mockapi.io/Products",
    method: "POST",
    data: Products,
  });
}

function apiUpdateProducts(ProductsId, newProducts) {
  return axios({
    url: `https://64b7d2f521b9aa6eb0791994.mockapi.io/Products/${ProductsId}`,
    method: "PUT",
    data: newProducts,
  });
}

function apiDeleteProducts(ProductsId) {
  return axios({
    url: `https://64b7d2f521b9aa6eb0791994.mockapi.io/Products/${ProductsId}`,
    method: "DELETE",
  });
}
