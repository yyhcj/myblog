const mysql = require('mysql');
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

//建立数据库连接
const connection = mysql.createConnection({
  host: '113.125.106.224',
  user: 'root',
  password: 'cj2436586',
  database: 'database1'
});
connection.connect((err) => {
  if (err) {
    console.error('数据库连接失败: ' + err.stack);
    return;
  }
  console.log('数据库连接 D: ' + connection.threadId);
});
//将返回数据从json格式转换为对象
const bodyParser = require('body-parser');
//const { values } = require('core-js/core/array');
app.use(bodyParser.json());

app.post('/api/getdetail', (req, res) => {
  // 执行数据库查询
  connection.query('SELECT * from main' , (error, results) => {
    if (error) {
      console.error('查询数据库时发生错误:', error);
      res.status(500).send('查询数据库时发生错误');
      return;
    }
    // 构建响应
    res.send(results);
  });
});
app.post('/api/insertdata', (req, res) => {
  // 执行数据库查询
  connection.query('insert into remenber (time,level,event,people,result) values (?,?,?,?,?)' ,[req.body.time,req.body.level,req.body.event,req.body.people,req.body.result], (error, results) => {
    if (error) {
      console.error('查询数据库时发生错误:', error);
      res.status(500).send('查询数据库时发生错误');
      return;
    }
    console.log("插入成功")
    // 构建响应
    res.send(results);
  });
});
app.listen(3000, () => {
  console.log('后端服务运行在端口 3000');
});
