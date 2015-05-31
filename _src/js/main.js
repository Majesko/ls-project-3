(function(){
//Позиционирование нажатием на квадраты 
	$("#up-left").click(function() {
		$("#es1").position({
			my: "left top",
			at: "left top",
			of: "#target"
		});
	});
	$("#up-center").click(function() {
		$("#es1").position({
			my: "center top",
			at: "center top",
			of: "#target"
		});
	});
	$("#up-right").click(function() {
		$("#es1").position({
			my: "right top",
			at: "right top",
			of: "#target"
		});
	});
	$("#left").click(function() {
		$("#es1").position({
			my: "left center",
			at: "left center",
			of: "#target"
		});
	});
	$("#center").click(function() {
		$("#es1").position({
			my: "center center",
			at: "center center",
			of: "#target"
		});
	});
	$("#right").click(function() {
		$("#es1").position({
			my: "right center",
			at: "right center",
			of: "#target"
		});
	});
	$("#down-left").click(function() {
		$("#es1").position({
			my: "left bottom",
			at: "left bottom",
			of: "#target"
		});
	});
	$("#down-center").click(function() {
		$("#es1").position({
			my: "center bottom",
			at: "center bottom",
			of: "#target"
		});
	});
	$("#down-right").click(function() {
		$("#es1").position({
			my: "right bottom",
			at: "right bottom",
			of: "#target"
		});
	});



	}());
