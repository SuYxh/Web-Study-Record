import Vue from 'vue'
import Axios from 'axios'


const axios = Axios.create({
    baseURL:'http://localhost:3000/api',
    timeout: 7000
})


process

// 请求
axios.interceptors.request.use(config => {
// Do something before request is sent
console.log('config',config)
return config;
},error => {
// Do something with request error
return Promise.reject(error);
});


// 响应
axios.interceptors.response.use(response => {
// Do something before response is sent
return response;
},error => {
// Do something with response error
return Promise.reject(error);
});


export function get(url,params ={}) {
    return new Promise((resolve,reject) => {
        axios.get(url,params)
        .then(res => {
            console.log(res.data)
            resolve(res.data)
        })
        .catch(err => {
            console.error(err); 
            reject(err)
        })
    })
}


export function post(url, data) {
    return new Promise((resolve, reject) => {
  
      axios.post(url, data).then(response => {
        resolve(response.data);
  
      }).catch( err => {
  
        reject(err)
      })
    })
  
  }


export function Delete(url, params) {

  return new Promise((resolve, reject) => {
    axios.delete(`${url}/${params}`).then(response => {

      resolve(response.data);

    }).catch(err => {

      reject(err);
    })
  })
}


export default axios