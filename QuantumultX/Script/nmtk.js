/***********************************
> 應用名稱：柠檬图库（微信小程序）
> 腳本作者：Cuttlefish
> 微信賬號：墨魚手記
> 更新時間：2021-12-24
***********************************/
var body = $response.body.replace(/integral":\d/,'integral":2099').replace(/success":false/,'success":true');

$done({ body });