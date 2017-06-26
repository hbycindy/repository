const fs=require('fs');
const express=require('express');
const app=express();

var dataBuffer=[];
//商家数据接口
app.get('/at/shop/:num',(req,res)=>{
	//设置相应的头，放在send之前
	
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("Content-Type","application/json");
	var num=req.params.num;
	var filename='./data/'+num+'.json'
	var result=null;

	//num 到数组中搜索
	for(var i=0;i<dataBuffer.length;i++){
		var dataObj=dataBuffer[i];
		if(num in dataObj){
			result=dataObj[num];
			break;
		}
	}

	//缓存中没有数据
	if(result==null){
		//读取文件出错时，返回
		fs.readFile(filename,(err,data)=>{
			if(err){
				console.log(err);
				return;
			}
			var o={};
			o[num]=data;
			dataBuffer.push(o);
			result=data;
			res.send(result);
		});
	}else{
		res.send(result);
	}
console.log(result);
});

app.listen(3000,()=>{
	console.log('服务已启动');
});

