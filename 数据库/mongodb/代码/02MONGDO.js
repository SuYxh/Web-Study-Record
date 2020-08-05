//db.getCollectionNames()
//插入1条数据
//db.users.insert({username:"马云",age:"58",height:"168"})
//插入多条数据
//db.users.insert([{username:"马云",age:"58",height:"168"},{username:"王健林",age:"58",height:"168"，like:"唱跳RAP"}])


//db.users.find(条件，显示的字段)
//db.users.find({username:"王健林"})
//db.users.find({username:"王健林"},{username:0,age:0})


//db.users.insert({username:"马云3",age:10,height:168})
//db.users.insert({username:"马云4",age:20,height:188})
//db.users.insert({username:"马云5",age:30,height:158})


//db.users.find({
//    age:{$gt:20}
//})

//db.users.find({
//    age:{$gte:20}
//})


//db.users.find({
//    age:{$lt:20}
//})

//db.users.find({
//    age:{$lte:20}
//})


//db.users.find({
//	age:{
//		$in:[10,20]
//	}
//})

//db.users.insert({username:"马云6",age:10,height:168,like:["苹果","雪梨"]})
//db.users.insert({username:"马云7",age:20,height:188,like:["苹果1","雪梨"]})
//db.users.insert({username:"马云8",age:30,height:158,like:["苹果2","雪梨"]})

//匹配所有符合的条件
//db.users.find({like:{$all:['苹果','雪梨']}})


//db.users.find({
//	age:{
//		$nin:[10,20]
//	}
//})
//db.users.find({
//	age:{
//		$ne:10
//	}
//})


//db.users.find({
//    age:
//    {$not:{$gt:20}}
//})


//db.jobs.find(
//	{
//		RecruitPostName:{$regex:/QQ飞车/ig}
//	}
//)

//db.users.find(
//	{
//		age:{$gt:10},
//		username:{$in:['马云4']}
//	}
//)


//db.users.find(
//	{
//		$or:[
//			{age:{$gt:10}},
//			{username:'王健林'}
//		] ,
//		
//	}
//)

//取出5条数据
//db.jobs.find().limit(5)
//page  limit   (page-1)*5
//page = 3
//result = db.jobs.find().skip(10).limit(5)



//db.jobs.find().skip(10).limit(5).sort({RecruitPostId:1})
//db.users.update({username:"马云1"},{$set:{age:99}})
//db.users.update({username:"马云1"},{$inc:{age:2}})
//db.users.update({username:"马云1"},{$unset:{height:1}})
//db.users.update({username:"马云8"},{$push:{like:"王思聪"}})

//db.users.update({username:"马云8"},{$pop:{like:1}})

//db.users.update({username:"马云8"},{$pull:{like:"苹果2"}})

//db.users.remove({username:"马云8"})

db.users.remove({age:10},{justOne:true})