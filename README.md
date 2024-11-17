# 0.6.0
## 前言
因为花了两周，所以这个版本就不顺推为0.5.0，定为0.6.0.
这个版本最大的更新就是音乐播放界面，虽然说还不太完整，但是已经迈出了第一步
有了初步的成果，让我更有信心和动力继续做下去
## 将文件上传到七牛云
``` node.js
//上传到七牛云
//中间件来读取req.file，由于传输策略，文件不能放在req.body里，是放在另一个专门传buffer类型的属性里
//这时候就要用mutler中间件来读取文件将文件暂存在内存里
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
  const accessKey = '';
  const secretKey = '';
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
            res.json("ok")
            return
        } else {
        }
    })
});
```
这段代码让我搞了特别久，这是我第一次看文档用别人的接口，所以就琢磨了很久，不过最后的结果还是好的，也算是可以完成功能，用这个接口只要输入一个文件数据就可以上传到七牛云我的存储空间，就可以通过url的形式来给我的网站适用。
## 音乐播放界面
![img](http://abc.cjnb.site/blog/myrecord/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-11-18%20000814.png)
外层是一个唱片图片中间是专辑的图片，图片右上角的那个可以根据播放暂停移动，歌词会随着歌曲的播放而滚动。主要的播放逻辑是先从数据库根据歌曲id获取歌词的路径，再通过路径获取歌词，再将lrc格式的歌词转化为要的数组（时间数组，歌词数组），再监听媒体的播放事件，比较时间在时间数组的位置来确定歌词的滚动。
## 添加音乐
![img](http://abc.cjnb.site/blog/myrecord/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-11-18%20001706.png)
输入歌曲名，图片地址，歌词文件，音乐文件即可添加音乐，其中歌曲名，图片地址，歌词文件地址，音乐文件地址会存进数据库，音乐文件，歌词文件会存进七牛云。
## 人生时刻界面小优化
![img](http://abc.cjnb.site/blog/myrecord/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-11-18%20001947.png)
## 遇见彩虹首页小优化
![img](http://abc.cjnb.site/blog/myrecord/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-11-18%20002135.png)
文件不再使用静态资源，图片存储在服务器上，图片加载速度变快很多
## 总结
这两周因为音乐播放界面的问题其他的开发非常少，不过我觉得也是值得的，不是做的多就厉害，要做有技术含量的做没做过的才能进步，增删改查写的再多再好进步也不会大，看到优秀的想法可以去学习模仿，别人遇到的问题自己也要思考改进，不因为难而怕，反而要因为难而兴奋，进步进步进步，我一定要进步！