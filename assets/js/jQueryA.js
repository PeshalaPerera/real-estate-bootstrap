$(function() {
	$("#maxBedroomsSpinner").spinner({
		min: 0,
		max: 12,
		spin: function(event, ui) {
			$(this).change();
		}
	});
});

$(function() {
	$("#minBedroomsSpinner").spinner({
		min: 0,
		max: 12,
		spin: function(event, ui) {
			$(this).change();
		}
	});
});

$(function() {
	$("#slider-range").slider({
		range:true,
		min: 249500,
		max: 750000,
		values: [ 75, 300 ],
		slide: function( event, ui ){
			$("#priceRange").val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
		}
	});
	
	$("#priceRange").val(" £" + $(" #slider-range").slider( "values", 0 ) + " - £" + $("#slider-range").slider( "values", 1 ) );
});

$(function() {
	$( "#Search" ).on("click", function(){
		
		var searchType = $("#searchType").val();
	    var propType =  $("#searchPropertyType").val();
        var maxBed =  $("#maxBedroomsSpinner").val();
        var minBed =  $("#minBedroomsSpinner").val();
		var baths =  $("#searchBathroomsInput").val();
		var minPrice = $("#slider-range").slider("option", "values")[0];
		var maxPrice = $("#slider-range").slider("option", "values")[1];
		
		var output="<ul>";
		   for (var i in data.properties) {
			   if (( searchType == data.properties[i].type) || (searchType=="Any"))
			   if (( propType == data.properties[i].type) || (propType=="Any"))
			   if (( minBed >= data.properties[i].bedrooms && maxBed <= data.properties[i].bedrooms ))
			   if (( baths == data.properties[i].type) || (baths=="Any"))
			   if (( data.properties[i].price >= minPrice && data.properties[i].price <= maxPrice ))
			   {
				   {
					   {
						   {
							   output+="<h2><li>" + "£" + data.properties[i].price +"</li></h2>" + "<img src=" + data.properties[i].picture + ">" + "<p>" + data.properties[i].description + "</p>" + "<button><a href='" + data.properties[i].url + "'>Visit Page</a></button>";
						   } } } } }
				output+="</ul>";
				document.getElementById( "Placeholder" ).innerHTML = output;
		   });
	});
	