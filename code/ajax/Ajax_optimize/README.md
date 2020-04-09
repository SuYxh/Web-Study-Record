# myAjax(obj)

### 参数

| 属性     | 类型     | 默认值 | 必填 | 说明                   |
| :------- | :------- | :----- | :--- | :--------------------- |
| url      | string   |        | 是   | 开发者服务器接口地址   |
| data     | object   |        | 是   | 请求的参数             |
| type     | string   | GET    | 否   | HTTP请求方法           |
| dataType | string   | json   | 否   | 返回的数据格式         |
| async    | boolean  | true   | 否   | 同步还是异步请求       |
| success  | function |        | 否   | 接口调用成功的回调函数 |