$(document).ready(function() {
	
	// append education details
	$('#education').append('Sophomore with major in <em>Computer Science</em> and minor in <em>Management</em>');
	
	// append classes taking
	$('#coursework').append('<b>Coursework - Fall 2017</b><br>');
	$('#coursework').append('<b>CS 251</b> Data Structures and Algorithms<br>');
	$('#coursework').append('<b>CS 250</b> Computer Architecture<br>');
	$('#coursework').append('<b>MGMT 200</b> Introductory Accounting<br>');

	// append books
	$('#books').append('<b>Books</b><br>');
	$('#books').append('Read <em>How to Fly a Horse</em> by Kevin Ashton<br>');
	$('#books').append('Currently reading <em>The American Spirit</em> by David McCullough<br>');

	// append hackathons
	$('#hackathons').append('<b>Hackathons</b><br>');
	$('#hackathons').append('<b>BigRed//Hacks 2016</b> - Cornell University<br>');
	$('#hackathons').append('<b>HackGT 2016</b> - Georgia Institute of Technology<br>');
	$('#hackathons').append('<b>HackIllinois 2017</b> - University of Illinois at Urbana–Champaign<br>');
});