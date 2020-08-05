var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// 插入单条数据
// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("laochen");
//     var myobj = { username: "老陈",type: "帅",like:['唱','跳','开车','搞代码'] };
//     dbo.collection("users").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });


// 插入多条数据
// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("user");
//     var myobj =  [
//         { name: "老陈",type: "帅",like:['唱','跳','开车','搞代码']},
//         { name: "吴亦凡",type: "帅",like:['唱','跳','大碗面']},
//         { name: "肖战",type: "帅",like:['唱','跳','爱粉丝']},
//        ];
//     dbo.collection("users").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     });
// });


 
// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("laochen");
//     dbo.collection("users").find({}).toArray(function(err, result) { // 返回集合中所有数据
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });
 

 
// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("laochen");
//      //var whereStr = {"username":'老陈'};  // 查询条件
//      var whereStr = {"username":{
//          $in:['老陈','王健林']
//      }};
//     dbo.collection("users").find(whereStr).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });


// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("laochen");
//     var whereStr = {"username":'老陈'};  // 查询条件
//     var updateStr = {$set: { "type" : '小胖帅' }};
//     dbo.collection("users").updateOne(whereStr, updateStr, function(err, res) {
//         if (err) throw err;
//         console.log("文档更新成功");
//         db.close();
//     });
// });



// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("laochen");
//     var whereStr = {"username":'老陈'};  // 查询条件
//     var updateStr = {$set: { "type" : '胸怀天下' }};;
//     dbo.collection("users").updateMany(whereStr, updateStr, function(err, res) {
//         if (err) throw err;
//          console.log(res.result.nModified + " 条文档被更新");
//         db.close();
//     });
// });


// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("laochen");
//     var mysort = { RecruitPostId: 1 };
//     dbo.collection("jobs").find().sort(mysort).limit(10). toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });


// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("laochen");
//     var mysort = { RecruitPostId: 1 };
//     dbo.collection("jobs").find().sort(mysort).skip(20).limit(10). toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });



//  { useNewUrlParser: true,useUnifiedTopology: true }
// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("laochen");
//     var whereStr = {"username":'老陈'};  // 查询条件
//     dbo.collection("users").deleteOne(whereStr, function(err, obj) {
//         if (err) throw err;
//         console.log("文档删除成功");
//         db.close();
//     });
// });



 
// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("laochen");
//     var whereStr = { height: "168" };  // 查询条件
//     dbo.collection("users").deleteMany(whereStr, function(err, obj) {
//         if (err) throw err;
//         console.log(obj.result.n + " 条文档被删除");
//         db.close();
//     });
// });






// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("laochen");
//     let obj = { _id: 1, product_id: 154, status: 1 }
//     dbo.collection("orders").insertOne(obj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });



 
// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("laochen");
//     var myobj =  [
//       { _id: 154, name: '笔记本电脑' },
//       { _id: 155, name: '耳机' },
//       { _id: 156, name: '台式电脑' }
//     ];
//     dbo.collection("products").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     });
// });



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
 
MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("laochen");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',            // 右集合
         
         localField: 'product_id',    // 左集合 join 字段
         foreignField: '_id',         // 右集合 join 字段
         as: 'orderdetails'           // 新生成字段（类型array）
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
 
MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("laochen");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',            // 右集合
         localField: 'product_id',    // 左集合 join 字段
         foreignField: '_id',         // 右集合 join 字段
         as: 'orderdetails'           // 新生成字段（类型array）
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});
