$( '#benchmark_price' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Benchmark Price"
 	args.fs = "8 pt"
	args.tr = "-20"
	args.clr = "#575756"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "left";
	args.targets = '#benchmark_price';
	populateChardin(args)
});

$( '#fund_price' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund Price"
	args.fs = "8 pt"
	args.tr = "-20"
	args.clr = "#e30613"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "left";
	args.targets = '#fund_price';
	populateChardin(args)
});

$( '#horizontal_scale' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund suitability copy"
	args.tr = "10"
	args.clr = "#010101"
	args.notes = "0.2 pt"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "top";
	args.targets = '#horizontal_scale';
	populateChardin(args)
});

$( '#graph' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Graph lines"
	args.notes = "Stroke width is 1 pt, Colours are #575756 and #e30613"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "top";
	args.targets = '#graph';
	populateChardin(args)
});

$( '#benchmark' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Benchark legend"
	args.tf = "Roboto Condensed"
	args.wt = "Regular"
	args.fs = "7,5 pt"
	args.clr = "#58595b"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "top";
	args.targets = '#benchmark';
	populateChardin(args)
});

$( '#fund_name' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund legend"
 	args.tf = "Roboto Condensed"
	args.wt = "Regular"
	args.fs = "7,5 pt"
 	args.clr = "#ed1c24"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "top";
	args.targets = '#fund_name';
	populateChardin(args)
});

$( '#vertical_scale' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Vertical scale numbers"
	args.fs = "5 pt"
	args.clr = "#010101"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "right";
	args.targets = '#vertical_scale';
	populateChardin(args)
});

$( '#vertical_scale_copy' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Vertical scale copy"
 	args.fs = "6,517 pt"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "right";
	args.targets = '#vertical_scale_copy';
	populateChardin(args)
});

$( '#perf_notes' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Chart notes"
	args.fs = "7 pt"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "bottom";
	args.targets = '#perf_notes';
	populateChardin(args)
});

$( '#perf_title' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Chart Title"
 	args.fs = "9,5 pt"
	args.tr = "-10"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "bottom";
	args.targets = '#perf_title';
	populateChardin(args)
});

// mouse out listeners
$( '#perf_title,#perf_notes,#vertical_scale_copy,#vertical_scale,#fund_name,#benchmark,#graph,#horizontal_scale,#fund_price,#benchmark_price').on("mouseout", function() {
  $('body').chardinJs('stop');
});


