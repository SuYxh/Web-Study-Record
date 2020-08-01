//数据信息操作的model层：完成对db.json信息的访问处理  
const fs = require("fs");
const dbfile = "./db.json";

/**
 * 获取所有会员信息
 */
exports.findAll = (callback)=>{
	fs.readFile(dbfile,"utf-8",(err,data)=>{
		if(err){ 
			callback(err,null);
		}else{
			callback(null,JSON.parse(data).members);
		}
	});
}

/**
 * 执行添加会员信息方法
 */
exports.save = (member,callback)=>{
	fs.readFile(dbfile,"utf-8",(err,data)=>{
		if(err){ 
			return callback(err);
		}
		let memlist = JSON.parse(data).members;
		//为即将添加的会员信息放置一个id号（获取最多id+1）
		member.id = memlist[memlist.length-1].id + 1;
		//将当前会员信息添加到会员信息列表中
		memlist.push(member);
		//将会员信息的json格式转成字串
		let memdata = JSON.stringify({"members":memlist});

		//写回文件中
		fs.writeFile(dbfile,memdata,(err)=>{
		 	callback(err);
		});
	});
}


/**
 * 根据 id 获取会员信息对象
 * @param  {Number}   id       会员 id
 * @param  {Function} callback 回调函数
 */
exports.findById = (id, callback) => {
  fs.readFile(dbfile, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    var memlist = JSON.parse(data).members;
    //从会员信息列表中获取出指定id的单条信息
    var ret = memlist.find((item) => {
      return item.id === parseInt(id);
    })
    callback(null, ret);
  })
}

/**
 * 修改会员
 */
exports.updateById = (member, callback) => {
  fs.readFile(dbfile, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    var memlist = JSON.parse(data).members;

    // 注意：这里记得把 id 统一转换为数字类型
    member.id = parseInt(member.id);

    // 你要修改谁，就需要把谁找出来
    // EcmaScript 6 中的一个数组方法：find filter也可以使用
    // 需要接收一个函数作为参数
    // 当某个遍历项符合 item.id === student.id 条件的时候，find 会终止遍历，同时返回遍历项
    var mem = memlist.find( (item) => {
      return item.id === member.id;
    })

    // 这种方式你就写死了，有 100 个难道就写 100 次吗？
    // stu.name = student.name
    // stu.age = student.age

    // 遍历拷贝对象
    for (var key in member) {
      mem[key] = member[key];
    }

    // 把对象数据转换为字符串
    var memdata = JSON.stringify({members:memlist})

    // 把字符串保存到文件中
    fs.writeFile(dbfile, memdata, (err) => {
       callback(err);
    })
  })
}

/**
 * 删除会员
 */
exports.deleteById = (id, callback) => {
  fs.readFile(dbfile, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    var memlist = JSON.parse(data).members;

    // findIndex 方法专门用来根据条件查找元素的下标
    var deleteId = memlist.findIndex((item) => {
      return item.id === parseInt(id);
    })

    // 根据下标从数组中删除对应的会员对象
    memlist.splice(deleteId, 1);

    // 把对象数据转换为字符串
    var memdata = JSON.stringify({members:memlist})

    // 把字符串保存到文件中
    fs.writeFile(dbfile, memdata,(err) => {
      callback(err);
    })
  })
}



/**
 * 根据 姓名/电话 获取会员信息对象
 * @param  {String/Number}   param      查询条件：姓名/电话
 * @param  {Function} callback 回调函数
 */
exports.findByCondition = (param, callback) => {
  console.log( 'members.js收到的参数：', param)
  fs.readFile(dbfile, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    var memlist = JSON.parse(data).members;
    //从会员信息列表中获取出指定id的单条信息
    var ret = memlist.find((item) => {
      return item.name == param.condition || item.phone == param.condition;
    })
    // console.log('members.js返回的数据：',ret)
    callback(null, ret);
  })
} 