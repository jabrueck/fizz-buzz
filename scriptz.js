for (var i=1; i < 101; i++) {
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