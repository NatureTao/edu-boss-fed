import axios from "axios"
import store from "@/store/index"
const request = axios.create({
    // 请求接口基址
    baseURL: 'https://mock.apifox.cn/m1/2401164-0-default'
})

//添加请求拦截器
request.interceptors.request.use(function(config){
    config.headers.Authorization = store.state.tokenInfo?.access_token
    return config
})

export default request