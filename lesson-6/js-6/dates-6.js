function dayOfWeek() {

	var w = new Date();
	var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var thisDay = weekdays[w.getDay()];
	document.getElementById("weekday").innerHTML = thisDay;

	var m = new Date();
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var thisMonth = months[m.getMonth()];
	document.getElementById("month").innerHTML = thisMonth;

	var d = new Date();
	document.getElementById("date").innerHTML = d.getDate();

	var y = new Date();
	document.getElementById("year").innerHTML = y.getFullYear();

	if (thisDay == "Friday") {
		document.getElementById("banner").innerHTML = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park.";
	}

	var copyright_year = new Date();
	document.getElementById("copyright_year").innerHTML = copyright_year.getFullYear();

}