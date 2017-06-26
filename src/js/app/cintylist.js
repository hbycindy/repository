define(['myutil','app/constants'],(creatXHR,c)=>{
	var letter=document.querySelector(".letter");
	var littlecity=document.querySelector(".littlecity");
	var xhr=creatXHR();
	var url=c.host+"/"+c.shopPath;
	xhr.open('get',url+"/5");
	xhr.send(null);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status>=200&&xhr.status<300||xhr.status==304){
				// console.log(xhr.responseText);
				var obj=JSON.parse(xhr.responseText);	
				// console.log(obj);
				for(var i=0;i<obj.length;i++){
					var spanletter=document.createElement('span');
					letter.appendChild(spanletter);
					spanletter.innerHTML=obj[i].zm;
					var spancity=document.createElement('span');
					littlecity.appendChild(spancity);
					// spancity.innerHTML=obj[i].A;
					spanletter.onmouseover=function(){
							this.style.color="red";
							console.log(obj)
							spancity.innerHTML=obj[0].A;
					}
					spanletter.onmouseout=function(){
							this.style.color="black";
						}

				}

			}

		}
		
	}

});