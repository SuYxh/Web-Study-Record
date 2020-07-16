## 2020-07-16  antd_table组件

#### 1、今日学习目标

antd_table组件

#### 2、目标完成情况

- table相关的API
- columns常用的API
- pagination 

#### 3、收获和感悟

bordered：是否展示外边框和列边框

pagination：分页器，参考配置项或 pagination文档，设为 false 时不展示和进行分页

size：表格大小，default | middle | small

rowKey：表格行 key 的取值，可以是字符串或一个函数

dataSource：数据数组

columns：表格列的配置描述

slots：使用 columns 时，可以通过该属性配置支持 slot 的属性，如 slots: { filterIcon: 'XXX'}

scopedSlots：使用 columns 时，可以通过该属性配置支持 slot-scope 的属性，如 scopedSlots: { customRender: 'XXX'}



工作中使用到的表格模板：

```js
<template>
  <a-table :data-source="data">
    <a-table-column-group>
      <span slot="title" style="color: #1890ff">Name</span>
      <a-table-column key="firstName" data-index="firstName">
        <span slot="title" style="color: #1890ff">First Name</span>
      </a-table-column>
      <a-table-column key="lastName" title="Last Name" data-index="lastName" />
    </a-table-column-group>
    <a-table-column key="age" title="Age" data-index="age" />
    <a-table-column key="address" title="Address" data-index="address" />
    <a-table-column key="tags" title="Tags" data-index="tags">
      <template slot-scope="tags">
        <span>
          <a-tag v-for="tag in tags" :key="tag" color="blue">{{ tag }}</a-tag>
        </span>
      </template>
    </a-table-column>
    <a-table-column key="action" title="Action">
      <template slot-scope="text, record">
        <span>
          <a>Action 一 {{ record.firstName }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
        </span>
      </template>
    </a-table-column>
  </a-table>
</template>
<script>
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  data() {
    return {
      data,
    };
  },
};
</script>

```

