// import moment from "moment";

/* 
import { getUsers } from "./common/usersAPI";

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getUsers().then(json => console.log(json));
});
*/




const getUserModule = () =>
  import(/* webpackChunkName: "userApi" */ "./common/usersAPI");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then((json) => console.log(json));
  });
});
