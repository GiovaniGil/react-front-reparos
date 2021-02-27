const tokenKey = 'token';

function getItemLocalStorage(item) {
  return localStorage.getItem(item);
}

function getToken() {
  return getItemLocalStorage(tokenKey);
}

function saveToken(payload) {
  return localStorage.setItem(tokenKey, payload.token);
}

function clearLocalStorage() {
  return localStorage.clear();
}

export {
  getItemLocalStorage,
  getToken,
  saveToken,
  clearLocalStorage,
};
