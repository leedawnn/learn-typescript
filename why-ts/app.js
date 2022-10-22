// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 * @property {Address} address
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 *
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

// 아래의 코드와 다른 점은 definition을 정의하지 않았을 때는 response를 찍어도 안에 들어있는 프로퍼티(값, 타입)를 미리 알 수 없다.(자동완성x)
fetchUser().then(function (response) {
  response.address.street;
});

function startApp() {
  fetchUser()
    .then(function (response) {
      user = response.data;

      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.street;
      // TODO: 이름, 이메일, 주소 표시하기
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
