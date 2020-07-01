const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }))

const db = require('./dao/connete.js');

//留言板回复插入数据模块
app.get('/msgleave', (req, res) => {
    const comments = req.query
    db.insertOne('msgleave', {comments}, (err, result) => {
        if (err) {
            res.send('0')
        } else {
            res.send(result)
        }
    })
})

//留言板回复渲染数据模块
app.get('/reply', (req, res) => {
    const comments = req.query
    db.find('msgleave', comments, (err, result) => {
        if (err) {
            res.send('0')
        } else {
            res.send(result)
        }
    })
})


//向数据库添加留言板内容
//失败返回0
app.get('/guestbook', (req, res) => {
    const comment = req.query;
    db.insertOne('mycomment', { comment }, (err, result) => {
        if (err) {
            res.send('0')
        } else {
            res.send(result)

        }
    }
    )
})
//插叙数据库留言板内容渲染到页面上去

app.get('/selectbooks', (req, res) => {
    const comment = req.query
    db.find('mycomment', comment, (err, result) => {
        if (err) {
            res.send('0')
        } else {
            res.send(result)
        }
    })
})



//向数据库添加数据
app.post('/blogs', (req, res) => {
    const data = req.body;
    db.insertOne('blog', {
        data
    }, (err, result) => {
        if (err) {
            res.send('')
        } else {
            res.send(result)
        }
    })

})

//从数据库取出数据
app.get('/select', (req, res) => {
    const datas = req.body;
    db.find('blog', datas, (err, result) => {
        console.log(result);
        if (err) {
            res.send('')
        } else {
            res.send(result)
        }
    })

})


//查询前台过来的值是否跟数据库匹配
//匹配成功,返回0 登入成功
//匹配失败,返回1  没有这个邮箱账号
app.post('/login', (req, res) => {
    const data = req.body;
    db.find('users', {
        name: data.useremail,
        pwd: data.userpwd
    }, (err, result) => {
        console.log(result);
        if (result == "") {
            res.send('1')
        } else {
            res.send('0')
        }
    })
})

// 处理前台传递过来的值
// 查询这个用户名是否存在
// 如果存在，返回 0
// 反之 添加数据
// 如果添加成功，返回 1
// 反之 返回 2
app.post('/zhuce', (req, res) => {
    const data = req.body;
    db.find('users', {
        name: data.useremail,
        pwd: data.userpwd
    }, (err, result) => {
        console.log(result);
        // 怎么判断这个用户是否存在
        if (result.length == 0) {
            // 可以注册
            db.insertOne('users', {
                name: data.useremail,
                pwd: data.userpwd
            }, (err, result) => {
                if (err) {
                    //添加失败返回2
                    res.send('2')
                } {
                    res.send('1')
                }
            })
        }
        else {
            // 用户名已经存在
            res.send("0")
        }

    })





})

app.listen(3000, () => {
    console.log('服务端连接成功');

})

