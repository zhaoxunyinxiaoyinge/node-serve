/**
 *
 * 定义context上面的处理
 */

module.exports = {
  // 设置文本的回复消息
  getMessageAuto(options) {
    console.log(options.MsgType,options);
    let xml = "";
    if (options.MsgType == "text") {
      xml = this.setText({
        ...options,
        val: "和博主聊聊天吧,生活会变得更美好",
      });
    } else if (options.MsgType == "image") {
      xml = this.setImage(options);
    } else if (options.MsgType == "voice") {
      xml = this.setRideo(options);
    } else if (options.MsgType == "video") {
      xml = this.setVedio(options);
    } else if (options.MsgType == "music") {
      xml = this.setMusic(options);
    } else if (options.MsgType == "news") {
      xml = this.setImageText(options);
    } else if (options.MsgType == "event") {
      if (options.Event == "subscribe") {
        xml=this.setText({
          ...options,
          val: "感谢关注博主的公众号,博主正在找前端工作",
        });
      }else if(options.Event=='CLICK'){
        if(options.EventKey=='V1001_GOOD'){
          xml=this.setText({...options,val:'你喜欢哪首歌曲'})
        }
        if(options.EventKey=='V1001_TODAY_MUSIC'){
          xml=this.setMusic({...options,playUrl:''})
        }
      }
    }
    return xml;
  },

  setText(options) {
    let text = `<xml><ToUserName><![CDATA[${
      options.FromUserName
    }]]></ToUserName><FromUserName><![CDATA[${
      options.ToUserName
    }]]></FromUserName><CreateTime>${Date.now()}</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[${options.val}]]></Content></xml>`;
    return text;
  },
  setImage(options) {
    let img = `<xml>
    <ToUserName><![CDATA[${options.FromUserName}]]></ToUserName>
    <FromUserName><![CDATA[${options.ToUserName}]]></FromUserName>
    <CreateTime>${Date.now()}</CreateTime>
    <MsgType><![CDATA[image]]></MsgType>
    <Image>
      <MediaId><![CDATA[${options.MediaId}]]></MediaId>
    </Image>
  </xml> `;
    return img;
  },
  setRideo(options) {
    let rideo = `<xml>
    <ToUserName><![CDATA[${options.FromUserName}]]></ToUserName>
    <FromUserName><![CDATA[${options.ToUserName}]]></FromUserName>
    <CreateTime>${Date.now()}</CreateTime>
    <MsgType><![CDATA[voice]]></MsgType>
    <Voice>
      <MediaId><![CDATA[${options.MediaId}]]></MediaId>
    </Voice>
   </xml>`;
    return rideo;
  },
  setVedio(options) {
    let video = `<xml>
    <ToUserName><![CDATA[${options.FromUserName}]]></ToUserName>
    <FromUserName><![CDATA[${options.ToUserName}}]]></FromUserName>
    <CreateTime>${Date.now()}</CreateTime>
    <MsgType><![CDATA[video]]></MsgType>
    <Video>
      <MediaId><![CDATA[${MediaId}]]></MediaId>
      <Title><![CDATA[恭喜大哥中奖了]]></Title>
      <Description><![CDATA[今天不知名主播竟然做了这么一件丑事。。。。]]></Description>
    </Video>
  </xml>`;
  return video
  },
  setMusic(options) {
    let music = `<xml>
    <ToUserName><![CDATA[${options.FromUserName}]]></ToUserName>
    <FromUserName><![CDATA[${options.ToUserName}]]></FromUserName>
    <CreateTime>${Date.now()}</CreateTime>
    <MsgType><![CDATA[music]]></MsgType>
    <Music>
      <Title><![CDATA[周杰伦]]></Title>
      <Description><![CDATA[最好听的歌声]]></Description>
      <MusicUrl><![CDATA[${options.playUrl}]]></MusicUrl>
      <HQMusicUrl><![CDATA[HQ_MUSIC_Url]]></HQMusicUrl>
      <ThumbMediaId><![CDATA[${options.MediaId}]]></ThumbMediaId>
    </Music>
  </xml>`;
    return music;
  },
  setImageText(options) {
    let text = "";
    options.count.forEach((item) => {
      text += `<item>
      <Title><![CDATA[${item.title}]]></Title>
      <Description><![CDATA[${item.desc}]]></Description>
      <PicUrl><![CDATA[${item.picUrl}]]></PicUrl>
      <Url><![CDATA[${item.url}]]></Url>
    </item>
        `;
    });
    let pictureText = `<xml>
    <ToUserName><![CDATA[${options.FromUserName}]]></ToUserName>
    <FromUserName><![CDATA[${options.ToUserName}]]></FromUserName>
    <CreateTime>${Date.now()}</CreateTime>
    <MsgType><![CDATA[news]]></MsgType>
    <ArticleCount>2</ArticleCount>
    <Articles>
        ${text}
    </Articles>
  </xml>`;
    return pictureText;
  },
};
