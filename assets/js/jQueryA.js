$(function () {
    $('#tabs').tabs();
});

$('.readmore-btn').on('click', function () {
    $(this).parent().toggleClass('showContent');

    // Shorthand if-else statement
    var replaceText = $(this).parent().hasClass('showContent') ? 'Read Less' : 'Read More';
    $(this).text(replaceText);
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
                <div class="container">
                    <div class="card">
						<div class="row">
							<div class="col-sm-12">
								<div class="row">
									<div class="col-md-6">
										<div class="agent-avatar-box">
											<img src="assets/img/${prop.picture}" alt="" class="agent-avatar img-fluid" />
										</div>
									</div>
									<div class="col-md-5 section-md-t3">
										<div class="agent-info-box box">
											<div class="agent-title">
												<div class="title-box-d">
													<h3 class="title-d property_location_draggerble">
														${prop.location}
													</h3>
													<a href="properties/${prop.id}/property-single-${prop.id}.html" class="link-a" style="
														color: black; ">Click here to view
														<span class="bi bi-chevron-right"></span>
													</a>
												</div>
											</div>
											<div class="agent-content mb-3 newDiv">
												<p class="content-d color-text-a">
													${prop.description}
												</p>
											</div>
											<a href="javascript:void();" class="readmore-btn">Read More</a>
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

        //call the function
        draggableProperty();
    });
});

$('.property_location_draggerble').draggable({
    // brings the item back to its place when dragging is over
    revert: true,

    // once the dragging starts, we decrease the opactiy of other items
    // Appending a class as we do that with CSS
    drag: function () {
        $(this).addClass('active');
    },

    // removing the CSS classes once dragging is over.
    stop: function () {
        $(this).removeClass('active');
    },
});

// Adding to fav list by Droppable for the hard coded items
var favListList = [];

$('#favList').droppable({
    // The class that will be appended to the to-be-dropped-element (favList)
    activeClass: 'active',

    // The class that will be appended once we are hovering the to-be-dropped-element (favList)
    hoverClass: 'hover',

    // The acceptance of the item once it touches the to-be-dropped-element favList
    tolerance: 'touch',

    drop: function (event, ui) {
        const text = ui.draggable.find('h3')?.context?.innerText;

        const isAlreadyDropped = favListList.some(fav => fav === text);

        if (!isAlreadyDropped) {
            favListList.push(text);
        }

        buildFavouriteList();

        const favouriteKey = 'favourites';

        // var staffIdToAdd = ui.draggable.find(".favIcon").attr("id");
        // var isAdded = false;
        // var myfav = JSON.parse(localStorage.getItem("favProduct"));
        // for (var i = 0; i < myfav.length; i++) {
        // 	if (myfav[i] == staffIdToAdd) {
        // 		isAdded = true;
        // 	}
        // }
        // if (isAdded == false) {
        // 	if (myfav == null) {
        // 		myfav = [];
        // 	}
        // 	myfav.push(staffIdToAdd);
        // 	localStorage.setItem("favProduct", JSON.stringify(myfav));

        // 	location.reload();
        // }
    },
});

function buildFavouriteList() {
    $('#favList').html('');

    for (const obj of favListList) {
        $('#favList').append('<p>' + obj + '</p>');
    }

    $('#favList p').draggable({
        // brings the item back to its place when dragging is over
        revert: true,

        // Appending a class as we do that with CSS
        drag: function () {
            $(this).addClass('active');
        },

        // removing the CSS classes once dragging is over.
        stop: function () {
            $(this).removeClass('active');
        },
        //localStorage.setItem("favProduct", JSON.stringify(myFavourites));
    });
}
//------------------------------------------------------
// Delete from fav list by Draggable the hard coded items
$('#favList p').draggable({
    // brings the item back to its place when dragging is over
    revert: true,

    // Appending a class as we do that with CSS
    drag: function () {
        $(this).addClass('active');
    },

    // removing the CSS classes once dragging is over.
    stop: function () {
        $(this).removeClass('active');
    },
    //localStorage.setItem("favProduct", JSON.stringify(myFavourites));
});

// Adding to fav list by Droppable for the hard coded items
$('.deleteItemCard').droppable({
    // The class that will be appended to the to-be-dropped-element (favList)
    //activeClass: "active",

    // The class that will be appended once we are hovering the to-be-dropped-element (favList)
    //hoverClass: "hover",

    // The acceptance of the item once it touches the to-be-dropped-element favList
    tolerance: 'touch',
    drop: function (event, ui) {
        console.log(event, ui);
        // var staffIdToAdd = ui.draggable.find(".favIcon").attr("id");
        // var isAdded = false;
        // var myfav = JSON.parse(localStorage.getItem("favProduct"));
        // for (var i = 0; i < myfav.length; i++) {
        //   if (myfav[i] == staffIdToAdd) {
        //     isAdded = true;
        //   }
        // }
        // if (isAdded == false) {
        //   if (myfav == null) {
        //     myfav = [];
        //   }
        //   myfav.push(staffIdToAdd);
        //   localStorage.setItem("favProduct", JSON.stringify(myfav));

        //   location.reload();
        // }
        //get the favicon's id which is equal to shoe id
        // var staffIdToDelete = ui.draggable.find('.deleteIcon').attr('id');

        // //Get the local storage current items
        // var myFavourites = JSON.parse(localStorage.getItem('favProduct'));
        // if (myFavourites != null) {
        //     for (var j = 0; j < myFavourites.length; j++) {
        //         if (myFavourites[j] == staffIdToDelete) {
        //             //delete item from the local storage
        //             myFavourites.splice(j, 1);
        //             localStorage.setItem('favProduct', JSON.stringify(myFavourites));
        //         }

        //         //reload the page after delete the item to favourite list
        //         if (!localStorage.getItem('reload')) {
        //             // set reload to true and then reload the page
        //             localStorage.setItem('reload', 'true');
        //             location.reload();
        //         }
        //         // after reloading remove "reload" from localStorage
        //         else {
        //             localStorage.removeItem('reload');
        //         }
        //     }
        // }
    },
});
//-----------------------------------------------------------

$('#droppable').droppable({
    drop: function (event, ui) {
        $(this).addClass('ui-state-highlight').find('p').html('Dropped!');
    },
});

function draggableProperty() {
    console.log('blablabla');
    $('.property_location_draggerble').draggable({
        // brings the item back to its place when dragging is over
        revert: true,

        // once the dragging starts, we decrease the opactiy of other items
        // Appending a class as we do that with CSS
        drag: function () {
            $(this).addClass('active');
        },

        // removing the CSS classes once dragging is over.
        stop: function () {
            $(this).removeClass('active');
        },
    });

    console.log('lalalla');
}

$(function () {
    $('.addFavourites').on('click', function () {
        try {
            $(this).attr('disabled', true);

            var propIdToAdd = $(this).closest('p').attr('id');

            var myFavouriteProp = JSON.parse(localStorage.getItem('favProp'));

            if (myFavouriteProp == null) {
                myFavouriteProp = [];
            }

            if (myFavouriteProp != null) {
                for (var j = 0; j < myFavouriteProp.length; j++) {
                    if (propIdToAdd == myFavouriteProp[j]) {
                        alert('This property is already in your favourites');
                        myFavouriteProp = [];
                    }
                }
            }

            myFavouriteProp.push(propIdToAdd);

            localStorage.setItem('favProp', JSON.stringify(myFavouriteProp));
        } catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                console.log('Error: Local storage limit exceeds');
            } else {
                console.log('ERROR: Saving to local storge.');
            }
        }
    });
});

$(function () {
    $('.removeFavourites').on('click', function () {
        $(this).attr('disabled', true);

        var propIdToRemove = $(this).closest('p').attr('id');

        myFavouriteProp = JSON.parse(localStorage.getItem('favProp'));

        if (myFavouriteProp != null) {
            for (var j = 0; j < myFavouriteProp.length; j++) {
                if (propIdToRemove == myFavouriteProp[j]) {
                    alert('This Property has been removed');

                    delete myFavouriteProp[j];

                    localStorage.setItem('favProp', JSON.stringify(myFavouriteProp));

                    myFavouriteProp[j] = [];
                }
            }
        }

        if (myFavouriteProp == null) {
            alert('You have no favourite items');
        }
    });
});
