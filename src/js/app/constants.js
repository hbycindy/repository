//该模块把所有项目中的常量封装到模块中
define(()=>{
	var host='http://localhost:3000';
	var shopPath="at/shop";

	var constant={};
	constant.host=host;
	constant.shopPath=shopPath;
	return constant;
})