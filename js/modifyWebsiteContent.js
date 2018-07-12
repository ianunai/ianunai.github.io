$(document).ready(function() {

	// access content divs
	var education = $('#education');
	var coursework = $('#coursework');
	var books = $('#books');

	// coursework
	var spring2018 = [
		{
			"number" : "CS 252",
			"name" : "Systems Programming"
		},
		{
			"number" : "CS 307",
			"name": "Software Engineering"
		},
		{
			"number" : "MA 265",
			"name": "Linear Algebra"
		},
		{
			"number" : "MGMT 201",
			"name": "Management Accounting"
		},
		{
			"number" : "ECON 251",
			"name": "Microeconomics"
		}
	];

	var fall2018 = [
		{
			"number" : "CS 381",
			"name" : "Introduction to the Analysis of Algorithms"
		},
		{
			"number" : "CS 373",
			"name": "Data Mining and Machine Learning"
		},
		{
			"number" : "STAT 350",
			"name": "Introduction to Statistics"
		},
		{
			"number" : "MGMT 254",
			"name": "Legal Foundations of Business"
		},
		{
			"number" : "MA 373",
			"name": "Financial Mathematics"
		}
	];
	
	// books
	var book = [
	{
		"name" : "How to Fly a Horse",
		"author" : "Kevin Ashton"
	},
	{
		"name" : "How to Change the World",
		"author" : "David Bornstein"
	},
	{
		"name" : "Shoe Dog",
		"author" : "Phil Knight"
	},
	{	
		"name" : "The American Spirit",
		"author" : "David McCullough"
	},
	{
		"name" : "The Soul of Rumi",
		"author" : "Coleman Barks"
	}
];

	// append education details
	education.append('Rising junior with major in <em>Computer Science</em> and minor in <em>Management</em><br>');
	education.append('Interested in <em>Machine Learning</em> and <em>Software Engineering</em>');
	
	// append classes currently taking
	coursework.append('<b>Coursework - Spring 2018</b><br>');
	spring2018.forEach(function(course) {
		coursework.append(`<b>${course["number"]}</b> ${course["name"]}<br>`);
	});

	// append classes taking in Fall 2018
	coursework.append('<br><b>Coursework - Fall 2018</b><br>');
	fall2018.forEach(function(course) {
		coursework.append(`<b>${course["number"]}</b> ${course["name"]}<br>`);
	});

	// append books
	books.append('<b>Books</b><br>');
	book.forEach(function(book) {
		books.append(`<em>${book["name"]}</em> by ${book["author"]}<br>`);
	});
});
