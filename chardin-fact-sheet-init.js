

$( "#managers" ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund Managers"
	args.tf = "Merriweather"
	args.wt = "Bold & Light"
	args.fs = "7 pt"
	args.tr = "-10"
	args.ld = "11 pt"
	args.clr = "#ed1c24"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "bottom";
	args.targets = "#managers";
	populateChardin(args)
});

$( "#fundname" ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund Name"
	args.tf = "Merriweather"
	args.wt = "Bold"
	args.fs = "13 pt"
	args.clr = "#ed1c24"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "bottom";
	args.targets = "#fundname";
	populateChardin(args)
});

$( "#date" ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Date"
	args.tf = "Merriweather"
	args.tr = "-10"
	args.wt = "Bold"
	args.clr = "#ed1c24"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "bottom";
	args.targets = "#date";
	populateChardin(args)
});

$( "#page_num" ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund Name"
	
	
	args.fs = "7 pt"
	args.tr = "10"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "top";
	args.targets = "#page_num";
	populateChardin(args)
});

$( '#chart_title' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Performance (Standard Title)"
	
	args.wt = "Medium"
	args.fs = "9.5 pt"
	args.tr = "-10"
	args.ld = "18px"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "bottom";
	args.targets = '#chart_title';
	populateChardin(args)
});

$( '#fund_info_title' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund information (Standard Title)"
	
	args.wt = "Medium"
	args.fs = "9.5 pt"
	args.tr = "-10"
	args.ld = "18px"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "bottom";
	args.targets = '#fund_info_title';
	populateChardin(args)
});

$( '#fund_desc_title' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund Description (Standard Title)"
	
	args.wt = "Medium"
	args.fs = "9.5 pt"
	args.tr = "-10"
	args.ld = "18px"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "bottom";
	args.targets = '#fund_desc_title';
	populateChardin(args)
});

$( '#fund_obj_title' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund information (Standard Title)"
	
	args.wt = "Medium"
	args.fs = "9.5 pt"
	args.tr = "-10"
	args.ld = "18px"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "bottom";
	args.targets = '#fund_obj_title';
	populateChardin(args)
});

$( '#how_title' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund information (Standard Title)"
	
	args.wt = "Medium"
	args.fs = "9.5 pt"
	args.tr = "-10"
	args.ld = "18px"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "bottom";
	args.targets = '#how_title';
	populateChardin(args)
});

$( '#suitable_title' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund information (Standard Title)"
	
	args.wt = "Medium"
	args.fs = "9.5 pt"
	args.tr = "-10"
	args.ld = "18px"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "top";
	args.targets = '#suitable_title';
	populateChardin(args)
});

$( '#mins_title' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund information (Standard Title)"
	
	args.wt = "Medium"
	args.fs = "9.5 pt"
	args.tr = "-10"
	args.ld = "18px"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "top";
	args.targets = '#mins_title';
	populateChardin(args)
});

$( '#fund_desc_txt' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund description copy"
	
	
	args.tr = "10"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "bottom";
	args.targets = '#fund_desc_txt';
	populateChardin(args)
});

$( '#fund_obj_txt' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund objective copy"
	
	
	args.tr = "10"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "bottom";
	args.targets = '#fund_obj_txt';
	populateChardin(args)
});

$( '#how_txt' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Achieve objective copy"
	
	
	args.tr = "10"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "top";
	args.targets = '#how_txt';
	populateChardin(args)
});

$( '#suitable_txt' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund suitability copy"
	
	
	args.tr = "10"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "top";
	args.targets = '#suitable_txt';
	populateChardin(args)
});

$( '#chart_notes' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund notes"
	
	
	args.fs = "6 pt"
	args.tr = "-10"
	args.ld = "7.5 pt"
	args.kerning = "22"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "left";
	args.targets = '#chart_notes';
	populateChardin(args)
});

$( '#minimums_notes' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund suitability copy"
	
	
	args.tr = "10"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "top";
	args.targets = '#minimums_notes';
	populateChardin(args)
});

$( '#fund_desc_notes' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund suitability copy"
	
	
	args.tr = "10"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "bottom";
	args.targets = '#fund_desc_notes';
	populateChardin(args)
});

$( '#disclaimer_notes' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Contact details"
	args.tf = "Merriweather"
	args.wt = "Bold & Light"
	args.fs = "6 pt"
	args.clr = "#ed1c24"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "top";
	args.targets = '#disclaimer_notes';
	populateChardin(args)
});

$( '#mins_caveat' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Contact details"
	
	
	args.fs = "6 pt"
	args.kerning = "25"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "top";
	args.targets = '#mins_caveat';
	populateChardin(args)
});

$( '#mins_table' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Minimum investment tables"
 	args.notes = "Navigate to second page to see chart information"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "top";
	args.targets = '#mins_table';
	populateChardin(args)
});

$( '#tables' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Risk measures and returns tables"
 	args.notes = "Navigate to second page to see chart information"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "left";
	args.targets = '#tables';
	populateChardin(args)
});

$( '#fund_info_table' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Fund information table"
 	args.notes = "Navigate to second page to see chart information"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "left";
	args.targets = '#fund_info_table';
	populateChardin(args)
});

$( '#chart' ).on("click mouseover", function() {
  	var args = {};
 	args.head = "Performance chart"
 	args.notes = "Navigate to second page to see table information"
	var html = buildToolTip(args);
	args.html = html;
	args.position = "left";
	args.targets = '#chart';
	populateChardin(args)
});

// mouse out listeners
$( '#mins_table,#date,#managers,#fundname,#page_num,#disclaimer_notes,#tables,#chart,#chart_notes,#minimums_notes,#fund_desc_notes,#suitable_txt,#how_txt,#fund_desc_txt,#fund_obj_txt,#mins_caveat,#chart_title,#mins_title,#suitable_title,#how_title,#fund_obj_title,#fund_desc_title,#fund_info_title,#fund_info_table').on("mouseout", function() {
  $('body').chardinJs('stop');
});



