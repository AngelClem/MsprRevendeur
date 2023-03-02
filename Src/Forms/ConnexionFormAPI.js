import { BASE_API_PORT, BASE_API_URL } from "../Config";

export function getCustomer(id){
  return new Promise((resolve,reject)=>{

        fetch(BASE_API_URL + ':' + BASE_API_PORT + "/api/customers/"+id, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
          .then(r => r.json())
          .then(r => {
            console.log(r);
            resolve(r);
          })
          .catch(error => {
            console.error(error);
            reject(error);
          });
      });

}
export function getProduct(id){
  return new Promise((resolve,reject)=>{

        fetch(BASE_API_URL + ':' + BASE_API_PORT + "/api/products/", {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
          .then(r => r.json())
          .then(r => {
            console.log(r);
            resolve(r);
          })
          .catch(error => {
            console.error(error);
            reject(error);
          });
      });

}
