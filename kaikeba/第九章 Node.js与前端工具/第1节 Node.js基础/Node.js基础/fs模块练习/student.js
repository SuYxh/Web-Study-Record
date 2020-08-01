//数据信息操作的model层：完成对db.json信息的访问处理  
const fs = require("fs");
const dbfile = "./db.json";

/**
 * 获取所有学员信息
 */
exports.findAll = (callback) => {
	fs.readFile(dbfile, "utf-8", (err, data) => {
		if (err) {
			callback(err, null)
		} else {
			callback(null, JSON.parse(data).students)
		}

	})
}

/*

[
  { id: 1, name: '小黄', sex: '0', age: '20', classid: 'web2211' },
  { id: 2, name: '李四', sex: '0', age: '25', classid: 'web221' },
  { name: '王五', sex: '1', age: '20', classid: 'web102', id: 3 },
  { name: '赵六', sex: '0', age: '20', classid: 'web221', id: 5 },
  { name: '田七', sex: '1', age: '22', classid: 'web102', id: 6 },
  { name: 'jarvis', sex: '1', age: '22', classid: 'web001', id: 7 }
]
*/

/**
 * 执行添加学员信息方法
 */
exports.saveinfo = (info, callback) => {
	fs.readFile(dbfile, "utf-8", (err, data) => {
		if (err) {
			callback(err)
		}
		let stulist = JSON.parse(data).students
		info.id = stulist[stulist.length - 1].id + 1
		stulist.push(info)
		let studata = JSON.stringify({
			"students": stulist
		})
		fs.writeFile(dbfile, studata, (err) => {
			callback(err)
		})
	})
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
		let result = stulist.filter(i => {
			return i.id === parseInt(id)
		})
		callback(null, result)
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
		student.id = parseInt(student.id);
		var stu = stulist.find( (item) => {
		      return item.id === student.id;
		    })
		for (let key in student) {
			stu[key] = student[key]
		}
		var studata = JSON.stringify({students:stulist})
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