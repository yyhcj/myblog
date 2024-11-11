const qiniu = require('qiniu');

// 封装上传文件到七牛云的函数
function uploadFileToQiniu(req, key) {
    const bucket ='site-source-chen';
    const config = new qiniu.conf.Config();
    config.zone = qiniu.zone.Zone_z2;
    const accessKey = 'sjjOLXrJ6hxnlPvslJz9cd5JdTjoXVBtAndN2LB_';
    const secretKey = 'qjv93KPNDtCga-nag01_0SuxcSQnQFZ10Bq0l38B';

    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const options = {
        scope: bucket,
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);

    // 获取前端上传的文件对象
    const localFile = req.file;
    console.log("111", localFile);

    const formUploader = new qiniu.form_up.FormUploader(config);
    const putExtra = new qiniu.form_up.PutExtra();

    // 将文件对象转换为可读流，这里假设localFile已经是符合要求的文件对象，具体转换方式可能因文件获取方式而异
    const readableStream = localFile.stream;

    // 文件上传
    return formUploader.putStream(uploadToken, key, readableStream, putExtra)
      .then(({ data, resp }) => {
            if (resp.statusCode === 200) {
                console.log(data);
            } else {
                console.log(resp.statusCode);
                console.log(data);
            }
            return data;
        })
      .catch(err => {
            console.log('failed', err);
            throw err;
        });
}

module.exports = uploadFileToQiniu;
