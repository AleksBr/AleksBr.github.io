// slider

$(document).ready(function() {
	$('.section__slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
	  adaptiveHeight: false,
	  cursorheight: '20px',
	});
});

// parallax

$(document).ready(function() {
	$('.events__scroll').niceScroll({
		cursorcolor: '#e9df4a',
		cursoropacitymin: '1',
		cursorwidth: '14',
		cursorborder: '0',
		cursorborderradius: '0',
		cursorfixedheight: '178',
		mousescrollstep: '20',
	});
});

// d3



	// var dataset = [15, 35, 55, 75];

	// for (var i = 0; i < 4; i++) {
	// 	var newNumber = +prompt("enter number");
	// 	dataset.push(newNumber);
	// }

	                        
	// for (var i = 0; i < 4; i++) {           
 //    	var newNumber = Math.round(Math.random() * 80);  
 //    	dataset.push(newNumber);             
	// }




	// d3.select(".quality__list").selectAll("")
	// 	.data(dataset)
	// 	.enter()
	// 	.append("svg")
	// 	.attr("class", "quality__item")
	// 	.text(function(d) { return d + "%"; })
	// 	.style("height", function(d) {
	// 		return d + "px";
	// 	});

////////////////////////////////////////////////////////////////////

	// var dataset = [15, 25, 55, 85];

	// var w = "100%";
	// var h = 275;

	// var svg = d3.select(".quality__list")
	// 			.append("svg")
	// 			.attr("width", w)
	// 			.attr("height", h);



	// var circle = svg.selectAll("circle")
	// 				.data(dataset)
	// 				.enter()
	// 				.append("circle");

	// circle.attr("cx", function(d, i) {
	// 			return (i * 100) + 50;
	// 		})
	// 		.attr("cy", h/2)
	// 		.attr("r", function(d) {
	// 			return d;
	// 		})
	// 		.attr("fill", "#fff")
	// 		.attr("stroke", "#e9df4a")
	// 		.attr("stroke-width", "12px");

//////////////////////////////////////////////////////////////////////

	// var w = "100%";
	// var h = 275;
	// var dataset = [];
	// var percent = function(){
	// 	for (var i = 0; i < 4; i++){
	// 		var number = +prompt("enter number");
	// 		dataset.push(number); 
	// 	}		
	// 	return number;
	// };

	// d3.selectAll(".quality__item")
	// 	.append("svg")
	// 	.attr("width", w)
	// 	.attr("height", h)
	// 	.style("fill", "firebrick")
	// 	.append("text")
	// 	.text("80%");

//////////////////////////////////////////////////////////////

	// var dataset = [15, 25, 55, 85];

	// var w = "100%";
	// var h = 275;

	// var svg = d3.selectAll(".quality__item")
	// 			.append("svg")
	// 			.attr("width", w)
	// 			.attr("height", h);



	// var circle = svg.selectAll("circle")
	// 				.data(d)
	// 				.enter()
	// 				.append("circle");

	// circle.attr("cx", function(d, i) {
	// 			return (i * 100) + 50;
	// 		})
	// 		.attr("cy", h/2)
	// 		.attr("r", function(d) {
	// 			return d;
	// 		})
	// 		.attr("fill", "#fff")
	// 		.attr("stroke", "#e9df4a")
	// 		.attr("stroke-width", "12px");