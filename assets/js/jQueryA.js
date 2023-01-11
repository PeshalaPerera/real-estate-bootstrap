$(function () {
	$("#tabs").tabs();
});

$(function () {
	$("#draggerble").draggable();
});

$("#droppable").droppable({
	drop: function (event, ui) {
		$(this)
			.addClass("ui-state-highlight")
			.find("p")
			.html("Dropped!");
	}
});

$(function () {
	$('#maxBedroomsSpinner').spinner({
		min: 0,
		max: 12,
		spin: function (event, ui) {
			$(this).change();
		},
	});
});

$(function () {
	$('#minBedroomsSpinner').spinner({
		min: 0,
		max: 12,
		spin: function (event, ui) {
			$(this).change();
		},
	});
});

$(function () {
	$('#slider-range').slider({
		range: true,
		min: 0,
		max: 1000,
		values: [0, 300],
		slide: function (event, ui) {
			$('#priceRange').val('£' + ui.values[0] + ' - £' + ui.values[1]);
		},
	});

	$('#priceRange').val(
		' £' + $(' #slider-range').slider('values', 0) + ' - £' + $('#slider-range').slider('values', 1)
	);
});

$(function () {
	$('#search-property-btn').on('click', async function (e) {
		e.preventDefault();
		const properties = await getProperties();

		const searchType = $('#searchType').val();
		const propType = $('#searchPropertyType').val();
		const baths = $('#searchBathroomsInput').val();
		const maxBed = $('#maxBedroomsSpinner').val();
		const minBed = $('#minBedroomsSpinner').val();
		const minPrice = $('#slider-range').slider('option', 'values')[0];
		const maxPrice = $('#slider-range').slider('option', 'values')[1];

		const propertySinglePlaceholderElement = document.getElementById('property_single_placeholder');

		const filteredProperties = properties
			.filter(property => property.id)
			.filter(property => searchType === 'all' || property.type === propType)
			.filter(property => propType === 'all' || property.city === propType)
			.filter(property => baths === 'any' || property.baths >= baths)
			.filter(property => property.price >= minPrice)
			.filter(property => property.price <= maxPrice);
		//TODO: some issue with these
		// .filter(property => property.bedrooms >= minBed)
		// .filter(property => property.bedrooms <= maxBed);

		//TODO: Remove console logs
		console.log({ searchType });
		console.log({ propType });
		console.log({ maxBed });
		console.log({ minBed });
		console.log({ baths });
		console.log({ minPrice });
		console.log({ maxPrice });
		console.log({ properties });
		console.log({ filteredProperties });

		filteredProperties.forEach(prop => {
			propertySinglePlaceholderElement.innerHTML += `
                <div class="container" id="draggerble">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="agent-avatar-box">
                                        <img src="assets/img/${prop.picture}" alt="" class="agent-avatar img-fluid" />
                                    </div>
                                </div>
                                <div class="col-md-5 section-md-t3">
                                    <div class="agent-info-box">
                                        <div class="agent-title">
                                            <div class="title-box-d">
                                                <h3 class="title-d">
                                                    ${prop.location}
                                                </h3>
												<a href="property-single.html" class="link-a" style="
													color: black; ">Click here to view
													<span class="bi bi-chevron-right"></span>
												</a>
                                            </div>
                                        </div>
                                        <div class="agent-content mb-3">
                                            <p class="content-d color-text-a">
												${prop.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			<p></p>
            `;
		});
	});
});

$(function () {
	$(".addFavourites").on("click", function () {

		try {
			$(this).attr('disabled', true);

			var propIdToAdd = $(this).closest("p").attr("id");

			var myFavouriteProp = JSON.parse(localStorage.getItem("favProp"));

			if (myFavouriteProp == null) {
				myFavouriteProp = [];
			}

			if (myFavouriteProp != null) {
				for (var j = 0; j < myFavouriteProp.length; j++) {

					if (propIdToAdd == myFavouriteProp[j]) {

						alert("This property is already in your favourites");
						myFavouriteProp = [];
					}
				}
			}

			myFavouriteProp.push(propIdToAdd);

			localStorage.setItem("favProp", JSON.stringify(myFavouriteProp));

		}

		catch (e) {
			if (e == QUOTA_EXCEEDED_ERR) {
				console.log("Error: Local storage limit exceeds");
			}

			else {
				console.log("ERROR: Saving to local storge.");
			}
		}
	});
});

$(function () {
	$(".removeFavourites").on("click", function () {

		$(this).attr('disabled', true);

		var propIdToRemove = $(this).closest("p").attr("id");

		myFavouriteProp = JSON.parse(localStorage.getItem("favProp"));


		if (myFavouriteProp != null) {
			for (var j = 0; j < myFavouriteProp.length; j++) {

				if (propIdToRemove == myFavouriteProp[j]) {

					alert("This Property has been removed");

					delete myFavouriteProp[j];

					localStorage.setItem("favProp", JSON.stringify(myFavouriteProp));

					myFavouriteProp[j] = [];
				}
			}
		}

		if (myFavouriteProp == null) {
			alert("You have no favourite items");
		}
	});
});