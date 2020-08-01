const Stu = require('./student.js')


process.argv.forEach( (val,index) => {
    // console.log(index,':',val)
	// 使用帮助
    if (val === '--h') {
        console.log('请输入参数：search add update delete')
    }
	
	// 单条查询
	if (val === 'searchone') {
		console.log('已经执行')
	    Stu.findById(process.argv[3],(err,data) => {
	    	if(err){
	    		console.log(err)
	    	}
	    	console.log(data)
	    })	
	}
	
	// 多条查询
	if (val === 'search') {
	    Stu.findAll((err,data) => {
	    	if(err){
	    		console.log(err)
	    	}
	    	console.log(data)
	    })	
	}
	
	// 添加
	if (val === 'add') {
	    let stuxinxi =  { name: 'jarvis', sex: '1', age: '200', classid: 'web8888' }
	    
	    Stu.saveinfo(stuxinxi,(err) => {
	    	if (err) {
	    		console.log(err)
	    	}
	    	console.log('学生信息添加成功')
	    })
	}
	
	
	//  更新数据
	if (val === 'update') {
	    let student =  { id:5,name: 'jarvis', sex: '1', age: '200', classid: 'web8888' }
	    
	    Stu.updateById(student,(err) => {
	    	if (err) {
	    		console.log(err)
	    	}
	    	console.log('学生信息更新成功')
	    })
	}
	
	// 删除数据
	if (val === 'delete') {
	    Stu.deleteById(process.argv[3],(err) => {
	    	if (err) {
	    		console.log(err)
	    	}
	    	console.log('学生信息删除成功')
	    })
	}
} )




