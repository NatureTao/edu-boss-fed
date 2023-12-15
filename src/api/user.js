import request from '@/utils/request'

//登用户录
export const login = (data) =>{
   return request({
        method: 'POST',
        url: '/front/user/login',
        data: `phone=${data.phone}&password=${data.password}`
    })
    
}
//获取用户信息
export const getUserInfo = () =>{
    return request({
        method: 'GET',
        url: '/front/user/getInfo'
    })
}

//用户退出
export const logout = () =>{
    return request({
        method: 'POST',
        url: '/front/user/logout'
    })
}