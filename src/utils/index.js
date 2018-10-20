import axios from 'axios';
import {mapState} from 'vuex'
const baseURL='http://211.67.177.56:8080/hhdj';
const instance=axios.create({
    baseURL,
    timeout:10000
})
const qs = require('querystring')
instance.interceptors.request.use(function (config) {
    if (config.method == 'post') {
        config.data = qs.stringify(config.data)
        //stringify这个方法是将一个对象序列化成一个字符串，与querystring.parse相对。
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
}, function (error) {
    return Promise.reject(error)
})
// const xhr = {
//     get (url, data, config) {
//       return new Promise((resolve, reject) => {
//         instance.get(url, {params: data}, config).then(res => {
//           resolve(res.data)
//         }).catch (err => {
//           reject(err)
//         })
//       })
//     },
//     post (url, data, config, method = 'post') {
//       return new Promise((resolve, reject) => {
//         instance[method](url, data, config).then(res => {
//           if(res.data.code == 401){
//             router.push('/login')
//           }
//           resolve(res.data)
//         }).catch (err => {
//           reject(err)
//         })
//       })
//     },
//     put (url, data, config) {
//       return this.post(url, data, config, 'put')
//     },
//     delete (url, data, config) {
//       return this.post(url, data, config, 'delete')
//     }
//   }
  
// export default xhr;
const xhr = {
  get(url,data,config){
    return new Promise((resolve,reject)=>{
        const token = localStorage.getItem('token')
        let computedConfig = {
            ...config
        }
        if(token){
            computedConfig = {
                headers: {
                    'token': token
                }
            }
        }
        // console.log(computedConfig)
        instance.get(url,{params:data,...computedConfig}).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
},
fetch(methods,url,data,config){
    return new Promise((resolve,reject)=>{
        const token = localStorage.getItem('token')
        let computedConfig = {
            ...config
        }
        if(token){
            computedConfig = {
                headers: {
                    'token': token
                }
            }
        }
        instance[methods](url,data,computedConfig).then(res=>{
          const token = localStorage.getItem('token')
          resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}
}
export default xhr;

