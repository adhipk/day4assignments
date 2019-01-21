var parsedData;
var clickableObs;
var jsonData;
function init(){
	jsonData=document.querySelector("script#data").innerHTML;
	parsedData=JSON.parse(jsonData);
	//create list of all links
	clickableObs=document.querySelectorAll("[href='#']");
	//attaching click event to all of them
	for(var i=0;i<clickableObs.length;i++){
		clickableObs[i].addEventListener("click",clickme);
	}
	//initialising home so main isn't empty at start
	document.getElementById("main").innerHTML="<h3>"+parsedData["home"]["title"]+"</h3>"+"<p>"+parsedData["home"]["content"]+"</p>";
}
function clickme(){	
		console.log(this.id);
		var marker=this.id;
		var inner=document.getElementById("main");
		console.log(parsedData[marker]);
		if(marker=="home")
			inner.innerHTML=`<h3> ${parsedData[marker]["title"]} </h3><p>${parsedData[marker]["content"]}</p>`;
		if(marker=="about")
			inner.innerHTML=`<h3> ${parsedData[marker]["title"]} </h3><p>${parsedData[marker]["content"]}</p>`;
		if(marker=="contact")
			inner.innerHTML=`<h3> ${parsedData[marker]["title"]}</h3> ${parsedData[marker]["content"]}`;
		if(marker=="recent")
			inner.innerHTML=`<h3>${parsedData[marker]["title"]} </h3><h4>${parsedData[marker]["newsArray"][0]["title"]}</h4><p>${parsedData[marker]["newsArray"][0]["news"]} </p><h4> ${parsedData[marker]["newsArray"][1]["title"]} </h4><p>${parsedData[marker]["newsArray"][1]["news"]}</p>`;
}