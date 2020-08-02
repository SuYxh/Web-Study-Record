//数据信息操作的model层：完成对db.json信息的访问处理  
const fs = require("fs");
const dbfile = "./db.json";

/**
 * 获取所有学员信息
 */
exports.findAll = (callback)=>{
	fs.readFile(dbfile,"utf-8",(err,data)=>{
		if(err){ 
			callback(err,null);
		}else{
			callback(null,JSON.parse(data).students);
		}
	});
}

/**
 * 执行添加学员信息方法
 */
exports.save = (student,callback)=>{
	fs.readFile(dbfile,"utf-8",(err,data)=>{
		if(err){ 
			return callback(err,null);
		}
		let stulist = JSON.parse(data).students;
		//为即将添加的学生信息放置一个id号（获取最多id+1）
		student.id = stulist[stulist.length-1].id + 1;
		//将当前学生信息添加到学生信息列表中
		stulist.push(student);
		//将学生信息的json格式转成字串
		let studata = JSON.stringify({"students":stulist});

		//写回文件中
		fs.writeFile(dbfile,studata,(err)=>{
		 	callback(err,student);
		});
	});
}


/**
 * 根据 id 获取学生信息对象
 * @param  {Number}   id       学生 id
 * @param  {Function} callback 回调函数
 */
exports.findById = (id, callback) => {
  fs.readFile(dbfile, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    var stulist = JSON.parse(data).students;
    //从学员信息列表中获取出指定id的单条信息
    var ret = stulist.find((item) => {
      return item.id === parseInt(id);
    })
    callback(null, ret);
  })
}

/**
 * 修改学生
 */
exports.updateById = (student, callback) => {
  fs.readFile(dbfile, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    var stulist = JSON.parse(data).students;

    // 注意：这里记得把 id 统一转换为数字类型
    student.id = parseInt(student.id);

    // 你要修改谁，就需要把谁找出来
    // EcmaScript 6 中的一个数组方法：find
    // 需要接收一个函数作为参数
    // 当某个遍历项符合 item.id === student.id 条件的时候，find 会终止遍历，同时返回遍历项
    var stu = stulist.find( (item) => {
      return item.id === student.id;
    })

    // 这种方式你就写死了，有 100 个难道就写 100 次吗？
    // stu.name = student.name
    // stu.age = student.age

    // 遍历拷贝对象
    for (var key in student) {
      stu[key] = student[key];
    }

    // 把对象数据转换为字符串
    var studata = JSON.stringify({students:stulist})

    // 把字符串保存到文件中
    fs.writeFile(dbfile, studata, (err) => {
       callback(err);
    })
  })
}

/**
 * 删除学生
 */
exports.deleteById = (id, callback) => {
  fs.readFile(dbfile, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    var stulist = JSON.parse(data).students;

    // findIndex 方法专门用来根据条件查找元素的下标
    var deleteId = stulist.findIndex((item) => {
      return item.id === parseInt(id);
    })

    // 根据下标从数组中删除对应的学生对象
    stulist.splice(deleteId, 1);

    // 把对象数据转换为字符串
    var studata = JSON.stringify({students:stulist})

    // 把字符串保存到文件中
    fs.writeFile(dbfile, studata,(err) => {
      callback(err);
    })
  })
}