import request from '@/utils/request'

const api = {
  // initUrl:'https://res.huat.xyz/json/todos.json',
  // initUrl:'/origin',

  initUrl:'/todo/init',

  all:'/todo/all',
  del:'/todo/del/',
  select:'/todo/search/',
  select2:'/todo/search',

  update:'/todo/put/',
  create:'/todo/create',
  blurry:'/todo/blurry/'
}

export default api

// 数据初始化 
export function initShuju () {
  return request({
    url: api.initUrl,
    method: 'get',
  })
}

// 模糊查询
// export function blurrySearch (parameter) {
//   return request({
//     url: api.blurry,
//     method: 'get',
//     params: parameter
//   })
// }

export function blurrySearch (parameter) {
  return request({
    url: api.blurry+parameter,
    method: 'get',
  })
}



// 查询所有列表
export function getAllList (parameter) {
  return request({
    url: api.all,
    method: 'get',
    params: parameter
  })
}

//  删除单个列表
export function deleteItem (parameter) {
  return request({
    url: api.del+parameter,
    method: 'delete',
  })
}

//  查询单个列表
export function selectOneItem (parameter) {
  // return request.get(`/todo/search/${parameter}`)
  return request({
    url: api.select+parameter,
    method: 'get',
  })
}


//  更新元素
export function updateItem (id,parameter) {
  return request({
    url: api.update+id,
    method: 'put',
    data:parameter
  })
}

// 新增列表
export function addItem (parameter) {
  return request({
    url: api.create,
    method: 'post',
    data: parameter
  })
}