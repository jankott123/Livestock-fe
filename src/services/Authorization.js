import { isExpired, useJwt, decodeToken } from "react-jwt";
import Cookies from "universal-cookie";

export function  hasAccess() {
  let BaseURL = process.env.REACT_APP_APISERVER+"refresh";
  const cookies = new Cookies();
  const accessToken = cookies.get('accesstoken');
  

 if(accessToken !== undefined ){

  const token =  decodeToken(accessToken);
  const iat = token.iat;
  const rozdil = (Date.now() / 1000) - iat;

  if(rozdil > 9){
    return new Promise((resolve, reject) => {
      fetch(BaseURL, {
        method: "POST",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
    
  }


  if (accessToken === undefined) {
    return new Promise((resolve, reject) => {
      fetch(BaseURL, {
        method: "POST",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  else{
  return new Promise((resolve, reject) => {


    resolve();
})

  }
}



  