
document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById('pattern-canvas').width = window.innerWidth;  
	document.getElementById('pattern-canvas').height = window.innerHeight;
});

var projectRoot = "canvas-site/"
var projects = 19;

var splitUrl = window.location.href.split('/');
var f = splitUrl[splitUrl.length-1];
var currentProject  = parseInt(splitUrl[splitUrl.length-2]); 


document.onclick = function(){
	var nextProject = currentProject+1;
	if(nextProject > projects){
		nextProject = 1;
	}
	splitUrl[splitUrl.length-2] = nextProject;
	var newUrl = splitUrl.join("/");
	location.href=newUrl;
}



