// SECRETID 和 SECRETKEY请登录 https://console.cloud.tencent.com/cam/capi 进行查看和管理
var COS = require('cos-nodejs-sdk-v5');
const Strategy = require('passport-local/lib');
const { resolve } = require('path');
var cos = new COS({
  SecretId: "AKIDa0B7oGTTEj02oLdgT1KNBj26vUotiIch",
  SecretKey: "sUryrUs0tXw5ze3DBuNbZJo33oKabNtA",
});

const Controller = require("egg").Controller;

const path = require('path');
const sendToWormhole = require('stream-wormhole');
class UploadController extends  Controller {
    async uploadImage(){
        const ctx = this.ctx;
        const stream = await ctx.getFileStream();
        const filename =path.basename(stream.filename);

      let res= await cos.putObject({
          Bucket: 'file-list-1234-1258637789', /* 必须 */
          Region: 'ap-guangzhou',    /* 必须 */
          Key: 'image/'+filename,              /* 必须 */
          StorageClass: 'STANDARD',
          Body: stream,
          onProgress:function(progressData) {
              console.log(JSON.stringify(progressData));
          }
      })
      this.ctx.body=res;
    } 

}

module.exports=UploadController