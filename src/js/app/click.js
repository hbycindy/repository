define(()=>{
	var changes=document.querySelector(".changes");
	var city=document.querySelector(".city");
	var citybtn=document.querySelector(".citylist button");
	changes.onclick=function(){
		city.style.display="block";
	}
	citybtn.onclick=function(){
		city.style.display="none";
	}

});
		