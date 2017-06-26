var express=require('express');
var web=express();
web.get('/login',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	fs.readFile('1.json','utf-8',function(err,data){
		res.send(data);
	});
});
web.listen(8000,()=>{
	console.log('已启动');
});