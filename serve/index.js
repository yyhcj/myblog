const express = require('express');
const app = express();
const port = 3000;
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
  next();
});

// 引入 MySQL 数据库驱动
const mysql = require('mysql');

// 创建数据库连接配置
const connection = mysql.createConnection({
  host: '120.46.52.202',
  user: '19835551353',
  password: 'cj2436586',
  database: 'blog'
});

// 引入文件路径处理模块
const path = require('path');

// 指定上传文件的存储目录
const uploadPath = path.join(__dirname, 'music');
const geciuploadPath = path.join(__dirname, 'geci');

// 引入 multer 用于处理文件上传
const multer = require('multer');

// 配置 multer 的存储设置
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'audioFile') {
      cb(null, uploadPath);
    } else if (file.fieldname === 'geciFile') {
      cb(null, geciuploadPath);
    }
  },
  filename: (req, file, cb) => {
    const decodedFileName = decodeURIComponent(file.originalname);
    cb(null, decodedFileName);
  }
});

const upload = multer({ storage });

app.post('/music', upload.fields([{ name: 'audioFile' }, { name: 'geciFile' }]), (req, res) => {
  const { name, singer, duration } = req.body;
   const audioFilePath = path.join(uploadPath, decodeURIComponent(req.files['audioFile'][0].originalname));
  const geciFilePath = path.join(geciuploadPath, decodeURIComponent(req.files['geciFile'][0].originalname));
  const sql = 'INSERT INTO music (musicpath,gecipath,musicname,musicimg) VALUES (?,?,?,?)';
  connection.query(sql, [audioFilePath,geciFilePath,name,singer], (err, results) => {
   
  });
});
app.get('/getMusicAndLyric', (req, res) => {
  const sql = 'SELECT musicpath, gecipath FROM music';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('数据库查询错误：', err);
      res.status(500).send('数据库查询错误');
    } else {
      if (results.length > 0) {
        const { musicpath, gecipath } = results[0];
        res.json({ musicFilePath: musicpath, lyricFilePath: gecipath });
      } else {
        res.status(404).send('音乐未找到');
      }
    }
  });
});

app.listen(port, () => {
  console.log(`服务器在端口 ${port} 上运行`);
});