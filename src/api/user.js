import request from '@/utils/request'

export const login = (data) =>{
   return request({
        method: 'POST',
        url: '/front/user/login',
        data: `phone=${data.phone}&password=${data.password}`
    })
    
}

export const getUserInfo = () =>{
    return request({
        method: 'GET',
        url: '/front/user/getInfo'
    })
}
