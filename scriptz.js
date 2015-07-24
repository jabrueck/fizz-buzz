/*for(var i=1; i < 101; i++) {
	if (i % 3 == 0) {
		document.write("Fizz");
		document.write("<br/>");
	} else if (i % 5 == 0) {
		document.write("Buzz");
		document.write("<br/>");
	} else {
		document.write(i);
		document.write("<br />");
	}
}
-- forgot to account for the 15 and fizzbuzz */

$( document ).ready(function() {
	var input = +`${prompt("enter a number")}`;
	for (var i=1; i <= input; i++) {
		if (i % 15 == 0) {
			$("#count").append("fizzbuzz");
		} else if (i % 3 == 0) {
			$("#count").append("fizz");
		} else if (i % 5 == 0) {
			$("#count").append("buzz");
		} else {
			$("#count").append(i);
		}
		$("#count").append("<br>");
  	}
});