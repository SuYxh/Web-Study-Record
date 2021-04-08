import request from '@/utils/request'

const userApi = {
  Login: '/user/login',
  Register: '/auth/register'
}

// 登录
export function loginFun(parameter) {
  return request({
    url: userApi.Login,
    method: 'post',
    data: parameter
  })
}

// 注册
export function registerFun(parameter) {
  return request({
    url: userApi.Register,
    method: 'post',
    data: parameter
  })
}



