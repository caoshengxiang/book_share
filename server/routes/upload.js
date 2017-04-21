/**
 * Created by allen on 17-4-17.
 */

var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

router.post('/uploader', function (req, res, next) {
    var AVATAR_UPLOAD_FOLDER = 'upload';
    // var domain = 'http://localhost:3000';


    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';        //设置编辑
    form.uploadDir = 'server/public/' + AVATAR_UPLOAD_FOLDER;     //设置上传目录
    form.keepExtensions = true;     //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小

    form.parse(req, function(err, fields, files) {
        const FILE = files.file
        if (err) {
            res.locals.error = err;
            // res.render('index', { title: TITLE });
            return;
        }
        // console.log(FILE);

        var extName = '';  //后缀名
        switch (FILE.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;

        }
        console.log(FILE.type)
        console.log(extName);
        if(extName.length == 0){
            console.log('>>>>>>>>> 图片格式错误')
            res.locals.error = '只支持png和jpg格式图片';
            res.json({
                "file": FILE,
                "url": ''
            });
            return;
        }

        var avatarName = parseInt(Math.random()*Math.pow(10,16)) + '.' + extName;
        //图片写入地址；
        var newPath = form.uploadDir +'/' + avatarName;
        //显示地址；
        // var showUrl = domain + AVATAR_UPLOAD_FOLDER+ '/' + avatarName;
        var showUrl = '/'+AVATAR_UPLOAD_FOLDER+ '/' + avatarName;
        console.log("newPath>>>>>>>>>>", newPath);
        fs.renameSync(FILE.path, newPath);  //重命名
        res.json({
            "file": FILE,
            "url":showUrl
        });
    });
})

module.exports = router;