const express = require('express');
const bodyParser = require('body-parser');
   const cors = require('cors');
   const fs = require('fs')
const app = express();
const qiniu=require('qiniu');
const multer = require('multer');
const { Readable } = require('stream');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


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
// const path = require('path');
// // 指定上传文件的存储目录
// const uploadPath = path.join("www/wwwroot/120.46.52.202/", 'music');
// const geciuploadPath = path.join("www/wwwroot/120.46.52.202/", 'geci');
// const imguploadPath = path.join("www/wwwroot/120.46.52.202/", 'image');
// // 引入 multer 用于处理文件上传
// const multer = require('multer');
// // 配置 multer 的存储设置
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     if (file.fieldname === 'audioFile') {
//       cb(null, uploadPath);
//     } else if (file.fieldname === 'geciFile') {
//       cb(null, geciuploadPath);
//     } else if (file.fieldname === 'imgFile') {
//       cb(null, imguploadPath);
//     } 
//   },
//   filename: (req, file, cb) => {
//     const decodedFileName = decodeURIComponent(file.originalname);
//     cb(null, decodedFileName);
//   }
// });
// const upload = multer({ storage });
// app.post('/music', upload.fields([{ name: 'audioFile' }, { name: 'geciFile' },{name:'imgFile'}]), (req, res) => {
//   const { name, singer, duration } = req.body;
//    const audioFilePath = path.join(uploadPath, decodeURIComponent(req.files['audioFile'][0].originalname));
//   const geciFilePath = path.join(geciuploadPath, decodeURIComponent(req.files['geciFile'][0].originalname));
//   const imgFilePath = path.join(imguploadPath, decodeURIComponent(req.files['imgFile'][0].originalname));
//   const sql = 'INSERT INTO music (musicpath,gecipath,name,img) VALUES (?,?,?,?)';
//   connection.query(sql, [audioFilePath,geciFilePath,name,imgFilePath], (err, results) => {
//     if(error){
//       console.error(error)
//     }
//   });
// });
app.post('/getmusic', (req, res) => {
 const sql=`select musicpath,gecipath from music where musicid='23'`
 connection.query(sql,(error,results)=>{
  if(error){
    console.error(error)
  }
  else{
    res.json(results)
  }
 })
});
//获取收藏界面的数据
app.post('/get_sc_miandata',(req,res)=>{
const sql=`select name,img,${req.body.keyword}id from ${req.body.keyword} where class='${req.body.type}'`
connection.query(sql,(error,results)=>{
  if(error){
    console.error(error)
    return res.status(500).json({ error: '数据库查询错误' });
  }
  else{
    res.json(results);
  }
})
})
//覆盖收藏馆数据[照片墙，最爱通用]
app.post('/updatescdata',(req,res)=>{
  console.log(req.body)
  for(let i=0;i<req.body.roundlist.length;i++){
    const sql=`update ${req.body.keyword} set name='${req.body.roundlist[i].name}',img='${req.body.roundlist[i].img}' where ${req.body.keyword}id='${req.body.roundlist[i][req.body.keyword+'id']}'`
    connection.query(sql,(error,results)=>{
      if(error){
        console.log(error)
        return res.status(500).json({ error: '数据库查询错误' });
      }
      else{
        console.log('加载了一条数据')
      }
    })
  }
})
//修改单条数据[适用于normal类]
app.post('/changescnoraml',(req,res)=>{
  console.log(req.body)
    const sql=`update ${req.body.keyword} set name='${req.body.list.name}',img='${req.body.list.img}' where ${req.body.keyword}id='${req.body.list[req.body.keyword+'id']}'`
    connection.query(sql,(error,results)=>{
      if(error){
        console.log(error)
        return res.status(500).json({ error: '数据库查询错误' });
      }
      else{
        res.json("OK")
      }
    })
})
//删除scnormal数据
app.post('/deletescnormal',(req,res)=>{
  const sql = `delete from ${req.body.keyword} where ${req.body.keyword}id='${req.body.id}'`
  console.log(sql,"打印")
  connection.query(sql,(error,results)=>{
    if(error){
      console.error(error)
    }
    else{
      res.json("OK")
    }
  })
  })
//添加scnormal数据
app.post('/addscnormal',(req,res)=>{
  const sql = `insert into ${req.body.keyword} (name,img,class) values ('${req.body.add_data.name}','${req.body.add_data.img}','normal')`
  connection.query(sql,(error,results)=>{
    if(error){
      console.error(error)
    }
    else{
      res.json("OK")
    }
  })
  })
//获取所有事件记录
app.post('/getEventlist',(req,res)=>{
  const sql ='select * from eventrecord'
  connection.query(sql,(error,results)=>{
    if(error){
      return res.status(500).json({error:"数据库查询出错"})
    }
    else{
      res.json(results);
    }
  })
})
//搜索事件记录
app.post('/findevent',(req,res)=>{
  const sql =`select * from eventrecord where record_title like '%${req.body.findword}%' or record_detail like '%${req.body.findword}%' `
  connection.query(sql,(error,results)=>{
    if(error){
      return res.status(500).json({error:"数据库查询出错"})
    }
    else{
      res.json(results);
    }
  })
})
//上传我们的事件记录
app.post('/addEvent',(req,res)=>{
  const sql=`insert into eventrecord (record_title,record_img,record_detail,record_people,record_time) values ('${req.body.title}','http://120.46.52.202/weeventimg/${req.body.img}','${req.body.detail}','${req.body.people}','${req.body.time}')`
  connection.query(sql,(error,results)=>{
    if(error){
      return res.status(500).json({ error: '数据库查询错误' });
    }
    else{
      res.json(results);
    }
  })
})
//上传事件照片
const storage1 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/www/wwwroot/serve/eventimg');
  },
  filename: (req, file, cb) => {
    const decodedOriginalName = decodeURIComponent(file.originalname1);
    cb(null, decodedOriginalName);
  }
});
const upload1 = multer({ storage1 });
const iconv = require('iconv-lite');
const { error } = require('console');
const { console } = require('inspector');
app.post('/api/upload', upload1.single('image'),(req, res) => {
const filename = req.query.filename1;
console.log(req.file)
  const filePath = `/www/wwwroot/120.46.52.202/weeventimg/${decodeURIComponent(filename)}`;
  fs.writeFile(filePath, req.file.buffer, (err) => {
    if (err) {
      console.error(err)
    }
    res.send('图片上传成功');
  });
});
//获取事件详细信息
app.post('/geteventdetail',(req,res)=>{
  const sql=`select * from eventrecord where record_id='${req.body.recordid}'`
  connection.query(sql,(error,results)=>{
    if(error){
      return res.status(500).json({ error: '数据库查询错误' });
    }
    else{
      res.json(results)
    }
  })
})
//查日常感想数据
app.post('/getideadata',(req,res)=>{
  const sql = `select * from dailyidea join dailyideauser on  dailyidea.ideauserid=dailyideauser.userid ORDER BY dailyidea.ideaid DESC`
  connection.query(sql,(error,results)=>{
    if(error){console.log(error)
      return res.status(500).json({ error: '数据库查询错误' });
     }
    else{
      res.json(results)
    }
  })
})
//添加日常感想数据
app.post('/adddailyidea',(req,res)=>{
  const sql=`insert into dailyidea (ideatext,ideaimg,ideauserid,ideartime) values ('${req.body.text}','${req.body.img}','${req.body.id}','${req.body.time}')`
  connection.query(sql,(error,results)=>{
    if(error){
      console.log(error)
      return res.status(500).json({ error: '数据库查询错误' });
    }
    else{
      res.json("111")
    }
  })
})

//查人生时刻数据
app.post('/getshowtime',(req,res)=>{
const sql = `SELECT * FROM showtime ORDER BY showtime.showtime_time ASC`
connection.query(sql,(error,results)=>{
  if(error){
    console.error(error)
  }
  else{
    res.json(results)
  }
})
})
//修改人生时刻数据
app.post('/changeshowtime',(req,res)=>{
  const sql = `update showtime set showtime_title='${req.body.list.showtime_title}',showtime_img='${req.body.list.showtime_img}',showtime_detail='${req.body.list.showtime_detail}',showtime_time='${req.body.list.showtime_time}' where showtime_id='${req.body.list.showtime_id}'`
  connection.query(sql,(error,results)=>{
    if(error){
      console.error(error)
    }
    else{
      res.json("OK")
    }
  })
  })
//删除人生时刻数据
app.post('/deleteshowtime',(req,res)=>{
  const sql = `delete from showtime where showtime_id='${req.body.id}'`
  connection.query(sql,(error,results)=>{
    if(error){
      console.error(error)
    }
    else{
      res.json("OK")
    }
  })
  })
//添加人生时刻数据
app.post('/addshowtime',(req,res)=>{
  const sql = `insert into showtime(showtime_title,showtime_detail,showtime_img,showtime_time) values ('${req.body.add_data.showtime_title}','${req.body.add_data.showtime_detail}','${req.body.add_data.showtime_img}','${req.body.add_data.showtime_time}')`
  connection.query(sql,(error,results)=>{
    if(error){
      console.error(error)
    }
    else{
      res.json("OK")
    }
  })
  })
//查开发日志
app.post('/getmyrecord',(req,res)=>{
  const sql=`select * from myrecord`
  connection.query(sql,(error,results)=>{
    if(error){
      console.error(error)
    }
    else{
      res.json(results)
    }
  })
})
// 上传到七牛云
// 中间件来读取req.file，由于传输策略，文件不能放在req.body里，是放在另一个专门传buffer类型的属性里
// 这时候就要用mutler中间件来读取文件将文件暂存在内存里
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
//upload.single('file')意思是从请求中的表单中读取名称为name的文件来上传
app.post('/uptoqiniu',upload.single('file'),(req, res) => {
  //bucket为存储空间名称
  const bucket ='site-source-chen';
  const config = new qiniu.conf.Config();
  //这个是我的存储空间位置，广东-华南对应z2
  config.zone = qiniu.zone.Zone_z2;
  //从七牛云秘钥管理得到的我的一对秘钥
  const accessKey = 'sjjOLXrJ6hxnlPvslJz9cd5JdTjoXVBtAndN2LB_';
  const secretKey = 'qjv93KPNDtCga-nag01_0SuxcSQnQFZ10Bq0l38B';
  const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  //存储选项，将文件存在存储空间的哪个路径可以在bucket后面拼接路径
  const options = {
      scope: bucket,
  };
  const putPolicy = new qiniu.rs.PutPolicy(options);
  const uploadToken = putPolicy.uploadToken(mac);
  const formUploader = new qiniu.form_up.FormUploader(config);
  const putExtra = new qiniu.form_up.PutExtra();
    // 获取前端上传的buffer对象
  const readableStream = req.file.buffer; // 可读的流
  console.log(readableStream)
  //原本的文件名在传输过程中编码变成了7bit编码，将它转为utf-8
  //这里将转码后的文件名作为存到云服务区上的文件名
  const iconv = require('iconv-lite');
  const originalName = req.file.originalname;
  const utf8Name = iconv.decode(Buffer.from(originalName, 'latin1'), 'utf-8');
  const key=utf8Name;
  //将buffer类型的文件源数据转为可读的流，我也不太理解，应该是转了后它就有了一些方法，如果不转就报错once方法未定义
  const readableStream1 = new Readable({
    read() {
      this.push(readableStream);
      this.push(null);
    }
  });
  // 文件上传
  formUploader.putStream(uploadToken, key, readableStream1, putExtra)
    .then(({ data, resp }) => {
        if (resp.statusCode === 200) {
            console.log(data);
        } else {
            console.log(data);
        }
    })
    .catch(err => {
        console.log('failed', err);
    });
});
app.listen(port, () => {
  console.log(`服务器在端口 ${port} 上运行`);
});