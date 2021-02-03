console.log("hello!");

$(".joke").text("why does the clouds cry");

var $one = $("#l1");
var $one = $("#l2");
var $one = $("#l3");

$one.on("click", function() {
	$(this).hide();
	$two.show();
	$("body").css("background-color", "pink");
}

$two.on("click", function() {
	$(this).hide();
	$three.show();
	$("body").css("background-color", "blue");
}

$three.on("click", function() {
	$(this).hide();
	$one.show();
	$("body").css("background-color", "red");
}