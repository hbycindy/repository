/*
@author cohen.huang
@date 2017-6-9
@description 工具库
*/

(function(self){
	//创建xhr对象，
	function createXHR(){
		if(typeof XMLHttpRequest!="undefined"){
			return new XMLHttpRequest();
		}else if(typeof ActiveXObject!="undefined"){
			if(typeof arguments.callee.activeXString!="string"){
				var versions=['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'];
				var i=0;
				var len=0;
				for(i=0,len=versions.length;i<len;i++){
					try{//有可能错误的代码
						new ActiveXObject(versions[i]);//正确的话存入
						arguments.callee.activeXString=versions[i];
						break;//跳出循环
					}catch(ex){//对捕捉到的错误对象进行处理

					}
				}
				return new new ActiveXObject(arguments.callee.activeXString);
			}
		}else {
			throw new Error("没有XHR对象能够创建出来");//手动抛出异常，异常是个对象。Error()是构造函数，内置函数
		}
	}

	function print(msg){
		console.log(msg)
	}
	var o={}//定义一个对象
	o.createXHR=createXHR;//把方法添加到对象中
	o.dy=print;
	self.cohenLee=o; //直接在window中读取
})(window)