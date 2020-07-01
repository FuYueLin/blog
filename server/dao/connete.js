
// 这个模块就是封装了所有的对数据库常用的对象
const MongoClient = require('mongodb').MongoClient;

// 访问数据库，每次都要进行连接，可以把连接封装成一个函数
function _connectDB(callback) {
    const url = "mongodb://localhost:27017/student";
    MongoClient.connect(url, (err, db) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(err, db);
    })
}

// 添加数据
exports.insertOne = function(collectionName, json, callback) {

    _connectDB(function(err, db) {
        db.collection(collectionName).insertOne(json, function(err, result) {
            callback(err, result);
            db.close();
        })
    })
}


// 删除数据
exports.deleteMany = function(collectionName, json, callback) {
    _connectDB(function(err, db) {
        db.collection(collectionName).deleteMany(json, function(err, result) {
            callback(err, result);
            db.close()
        })
    })
}


// 修改数据
exports.updateMany = function(collectionName, json1, json2, callback) {
    _connectDB(function(err, db) {
        db.collection(collectionName).updateMany(json1, json2, function(err, result) {
            callback(err, result);
            db.close()
        })
    })
}

// 查询数据
exports.find = function(collectionName, json, C, D) {
    const result = []; //放最终结果的数组
    if (arguments.length == 3) { //用户不需要分页
        var limitnum = 0;
        var skipnum = 0;
        var callback = C;
    } else if (arguments.length == 4) { //用户需要分页，C就为分页条件
        var callback = D;
        var args = C; //args里面放的就是分页条件
        var limitnum = args.pageamount || 0; //每页多少条数据
        var skipnum = args.pageamount * args.page || 0; //省略多少条
        var sort = args.sort || {}; //排序条件
    } else {
        throw new Error("find函数必须有三个或者四个参数")
        return
    }

    _connectDB(function(err, db) {
        // 查询出来的数据
        const cursor = db.collection(collectionName).find(json).skip(skipnum).limit(limitnum).sort(sort);
        cursor.each(function(err, document) {
            if (err) {
                callback(err, null);
                db.close();
                return
            }
            if (document != null) {
                result.push(document);
            } else {
                callback(null, result);
                db.close()
            }
        })
    })
}
