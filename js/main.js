// console.log("main.js is loaded");
// $("img").width(200);

$(document).ready(function(){
	$("li").on("click",function(){

		if($(this).hasClass("done")){
			$(this).removeClass("done")
		}else{

		$(this).addClass("done") //says what is clicked
		//$("li").addClass("done")

		}
	});


$("img").on("dblclick", function(){
//img on click same as img click code below
	// here.
	$("img").width(200);
	$("h1").fadeOut();
	$(".booboo").slideUp();
	$("#rahul").hide();
});

$("img").click(function(){
	// here.
	// $("img").width(200);

	});
});
