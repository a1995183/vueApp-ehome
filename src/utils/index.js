import axios from 'axios';

const baseURL='http://211.67.177.56:8080/hhdj';
const instance=axios.create({
    baseURL,
    timeout:10000
})
const xhr={
    get(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.get(url,{params:data},config).then(res=>{
              resolve(res)
            })
        })
    },
    post(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.post(url,data,config).then(res=>{
              resolve(res)
            }).catch(err=>reject(err))
        })
    }
}
export default xhr;