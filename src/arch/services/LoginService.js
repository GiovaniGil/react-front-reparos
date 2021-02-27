import {
  saveToken,
  clearLocalStorage,
} from './LocalStorageService';
import http from './HttpService';

function login(user) {
  return new Promise((resolve, reject) => http
    .post('/auth/login', user).then(
      ({ data }) => {
        saveToken(data);
        resolve(data);
      },
      (error) => {
        reject(error);
      },
    ));
}

function logout(props) {
  clearLocalStorage();
  props.history.push('/login');
}

export {
  login,
  logout,
};
