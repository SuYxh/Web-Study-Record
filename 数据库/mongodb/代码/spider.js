
let axios = require('axios')


//设置insertManyPromise函数
function insertMany(collection,arr){
    return new Promise((resolve,reject)=>{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://118.126.96.227:27017/";
        MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("loldb");
            dbo.collection(collection).insertMany(arr, function(err, res) {
                if (err) reject(err);
                console.log("插入的文档数量为: " + res.insertedCount);
                db.close();
                resolve()
            });
        });
    })
    
}



//设置insertManyPromise函数
function insertOne(collection,obj){
    return new Promise((resolve,reject)=>{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://118.126.96.227:27017/";
        MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("loldb");
            dbo.collection(collection).insertOne(obj, function(err, res) {
                if (err) reject(err);
                console.log("文档插入成功");
                db.close();
                resolve()
            });
        });
    })    
}


//获取英雄列表
async function getHeroList(){
    let httpUrl = 'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js'
    let result = await axios.get(httpUrl);
    console.log(result.data.hero)
    await insertMany('herolist',result.data.hero)
    return result.data.hero;
}
// getHeroList()


// 获取英雄信息内容，并存入数据库
async function getHero(heroid){
    let httpUrl = `https://ossweb-img.qq.com/images/lol/act/img/js/hero/${heroid}.js`
    let result = await axios.get(httpUrl)
    await insertOne('heroinfo',result.data.hero)
    return result.data;
}



//定义主函数，先获取所有英雄列表，并循环英雄列表将所有英雄详情内容载入。
async function run(){
    let herolist = await getHeroList();
    await herolist.reduce(async (prev,item,i)=>{
        await prev
        return new Promise(async (resolve,reject)=>{
            await getHero(item.heroId) 
            resolve()
        })
    },Promise.resolve())
}
run()