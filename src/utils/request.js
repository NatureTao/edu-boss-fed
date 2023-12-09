import axios from "axios"

const request = axios.create({
    // 请求接口基址
    baseURL: 'https://mock.apifox.cn/m1/2401164-0-default'
})

export default request