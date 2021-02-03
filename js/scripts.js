console.log("hello!");

// $(".joke").text("why does the clouds cry");

var $one = $("#j1");
var $two = $("#a1");
var $three = $("#j2");
var $four = $("#a2");
var $five = $("#j3");
var $six = $("#a3");

$one.on("click", function() {
	$(this).hide();
	$two.show();
	$("body").css("background-color", "#F3E1DD");
})

$two.on("click", function() {
	$(this).hide();
	$three.show();
	$("body").css("background-color", "#CCB7AE");
})

$three.on("click", function() {
	$(this).hide();
	$four.show();
	$("body").css("background-color", "#A6808C");
})

$four.on("click", function() {
	$(this).hide();
	$five.show();
	$("body").css("background-color", "#706677");
})

$five.on("click", function() {
	$(this).hide();
	$six.show();
	$("body").css("background-color", "#565264");
})

$six.on("click", function() {
	$(this).hide();
	$one.show();
	$("body").css("background-color", "#F2C57C");
})