/***********************************
> 應用名稱：小打卡(微信小程序)
> 軟件版本：0.0.0
> 下載地址：微信小程序搜索小打卡
> 腳本作者：群友投稿
> 微信賬號：墨魚手記
> 更新時間：2022-03-12
***********************************/
var cuttlefish ={"warning":"本腳本僅供學習交流使用，禁止轉載售賣"}
let obj = JSON.parse($response.body);
obj.data.endTime = 1867996357000;
obj.data.hasOpenedMember = true;
$done({body: JSON.stringify(obj)});
