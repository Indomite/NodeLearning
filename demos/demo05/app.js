const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
const dbName = 'test';

const client = new MongoClient(url, { useUnifiedTopology: true });
client.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("数据库连接成功");
    let db = client.db(dbName);

    //查找数据
    db.collection("user").find({}).toArray((err, data) => {
        console.log(data);
        client.close();
    })

    //增加数据
    // db.collection("user").insertOne({ "username": "001", "password": "123456" }, (err, data) => {
    //     if (err) {
    //         console.log('插入失败');
    //         return;
    //     }
    //     console.log('增加成功');
    //     console.log(data);
    // })

    //修改数据
    // db.collection("user").updateOne({ "username": "admin", "age": "20" }, { $set: { "username": "admin", "password": "123456" } }, (err, data) => {
    //     if (err) {
    //         console.log('修改失败');
    //         return;
    //     }
    //     console.log('修改成功');
    //     console.log(data);
    // })

})