//获取url的参数信息
function getQueryString() {
	var str = location.href;
	var num = str.indexOf("/p/");
	str = str.substr(num + 3);
	if (parseInt(str) > 500000000) {
		window.location.href = "./p/418971438.html"; //优豆云
	} else {
		window.location.href = "./p/418962396.html"; //三丰云
	}
}

//使用方法：
var Request = new getQueryString();
var seq_uuid = Request.seq_uuid;
