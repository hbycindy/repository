//该模块获取商家的数据
define(['myutil','app/constants'],(creatXHR,c)=>{
	// var introul=document.querySelector('.')
	var lis=document.querySelectorAll(".introul li");
	var lisdiv=document.querySelectorAll(".lione");
	var lisimg=document.querySelectorAll(".liimg");
	var lisintrol=document.querySelectorAll(".liintro");
	var changes=document.querySelector(".changes");
	var page=document.querySelectorAll(".pages span");

	for(var i=0;i<page.length;i++){
		page[i].index=i;

		page[i].onclick=function(){

			move(this.index);
		}
	}
	function move(num){

		var xhr=creatXHR();
		var url=c.host+"/"+c.shopPath;
		xhr.open('get',url+"/"+page[num].innerHTML);
		xhr.send(null);
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status>=200&&xhr.status<300||xhr.status==304){
					// console.log(xhr.responseText);
					var obj=JSON.parse(xhr.responseText);			
					for(var i=0;i<lis.length;i++){
						// 
						var imgone=document.createElement("img");
						lisimg[i].appendChild(imgone);
						imgone.src=obj.shop_data[i].shop_ico;
						var pone=document.createElement("p");
						lisintrol[i].appendChild(pone);
						var a=document.createElement("a");
						pone.appendChild(a);
						a.setAttribute('href','index1.html');
						a.innerHTML=obj.shop_data[i].shop_name;
						
						var span=document.createElement("span");
						pone.appendChild(span);
						span.innerHTML="店铺等级：";

						// var imgstar=document.createElement("img");
						// span.appendChild(imgstar);
						// imgstar.src=obj.shop_data[i].addr_city_code;

						var ptwo=document.createElement("p");
						lisintrol[i].appendChild(ptwo);
						ptwo.innerHTML="主营："+obj.shop_data[i].main;

						var pthree=document.createElement("p");
						lisintrol[i].appendChild(pthree);
						pthree.innerHTML="地址："+obj.shop_data[i].addr_detail;

						a.onmouseover=function(){
							this.style.borderBottom="1px solid green";
						}
						a.onmouseout=function(){
								this.style.borderBottom="none";
						}
					}
					

					//页面跳转后的商家
				}
			}
		}
	}
	move(1);
});