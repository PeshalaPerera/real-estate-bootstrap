(function () {
    function getNavigationHTML() {
        function getCurrentPage() {
            const path = window.location.pathname;
            const page = path.split('/').pop();
            console.log(`Current page: ${page}`);
            return page;
        }

        function getStyles(isActive) {
            return isActive ? 'active' : '';
        }

        const currentPage = getCurrentPage();

        const indexPage = 'index.html';
        const findPage = 'find.html';
        const favouritesPage = 'favourites.html';
        const propertyGridPage = 'property-grid.html';

        let isIndexPageActive = false;
        let isFindPageActive = false;
        let isFavouritesPageActive = false;
        let isPropertyPageActive = false;

        switch (currentPage) {
            case indexPage:
                isIndexPageActive = true;
                break;
            case findPage:
                isFindPageActive = true;
                break;
            case favouritesPage:
                isFavouritesPageActive = true;
                break;
            case propertyGridPage:
                isPropertyPageActive = true;
                break;
        }

        return `<div class="container">
    <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarDefault"
        aria-controls="navbarDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span></span>
        <span></span>
        <span></span>
    </button>
    <img class="logo" src="images/icons/logo.png" alt="dreamHome" />
    <a class="navbar-brand text-brand" href="${indexPage}">Dream<span class="color-b">Home</span></a>

    <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link ${getStyles(isIndexPageActive)}" href="${indexPage}">Home</a>
            </li>

            <li class="nav-item">
                <a class="nav-link ${getStyles(isFindPageActive)}" href="${findPage}">Find</a>
            </li>

            <li class="nav-item">
                <a class="nav-link ${getStyles(isPropertyPageActive)}" href="${propertyGridPage}">Property</a>
            </li>

            <li class="nav-item">
                <a class="nav-link ${getStyles(isFavouritesPageActive)}" href="${favouritesPage}">Favourites</a>
            </li>
        </ul>
    </div>
</div>`;
    }

    function getFooterHTML() {
        return `<section class="section-footer">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-4">
                <div class="widget-a">
                    <div class="w-header-a">
                        <h3 class="w-title-a text-brand">Get In Touch</h3>
                    </div>
                    <div class="w-footer-a">
                        <ul class="list-unstyled">
                            <li class="color-a">
                                <span class="color-text-a">Phone .</span> +54 356 945234
                            </li>
                            <li class="color-a">
                                <span class="color-text-a">Email .</span>
                                dreamhome@gmail.com
                            </li>
                            <li class="color-a">
                                <span class="color-text-a">Address .</span> Smith Ave, UK
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-8 section-md-t3">
                <div class="widget-a">
                    <div class="w-header-a">
                        <h3 class="w-title-a text-brand">Gallery</h3>
                    </div>
                    <div class="w-body-a">
                        <div class="w-body-a">
                            <div class="block-24">
                                <div class="row no-gutters">
                                    <div class="col-4 col-md-4 p-1">
                                        <a
                                            href="#"
                                            class="img rounded"
                                            style="
                                                background-image: url(images/footer/insta-1.jpg);
                                            "
                                        ></a>
                                    </div>
                                    <div class="col-4 col-md-4 p-1">
                                        <a
                                            href="#"
                                            class="img rounded"
                                            style="
                                                background-image: url(images/footer/insta-2.jpg);
                                            "
                                        ></a>
                                    </div>
                                    <div class="col-4 col-md-4 p-1">
                                        <a
                                            href="#"
                                            class="img rounded"
                                            style="
                                                background-image: url(images/footer/insta-3.jpg);
                                            "
                                        ></a>
                                    </div>
                                    <div class="col-4 col-md-4 p-1">
                                        <a
                                            href="#"
                                            class="img rounded"
                                            style="
                                                background-image: url(images/footer/insta-4.jpg);
                                            "
                                        ></a>
                                    </div>
                                    <div class="col-4 col-md-4 p-1">
                                        <a
                                            href="#"
                                            class="img rounded"
                                            style="
                                                background-image: url(images/footer/insta-5.jpg);
                                            "
                                        ></a>
                                    </div>
                                    <div class="col-4 col-md-4 p-1">
                                        <a
                                            href="#"
                                            class="img rounded"
                                            style="
                                                background-image: url(images/footer/insta-6.jpg);
                                            "
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <nav class="nav-footer">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="find.html">Find</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="property-grid.html">Property</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="gallery.html">Gallery</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="favourites.html">Favourites</a>
                    </li>
                </ul>
            </nav>
            <div class="socials-a">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="https://www.facebook.com/">
                            <i class="bi bi-facebook" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://twitter.com/">
                            <i class="bi bi-twitter" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.instagram.com/">
                            <i class="bi bi-instagram" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.linkedin.com/">
                            <i class="bi bi-linkedin" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
    }

    try {
        document.getElementById('navigation').innerHTML = getNavigationHTML();
        document.getElementById('footer').innerHTML = getFooterHTML();
    } catch (error) {}
})();

(function () {
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener));
            } else {
                selectEl.addEventListener(type, listener);
            }
        }
    };

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener);
    };

    /**
     * Toggle .navbar-reduce
     */
    let selectHNavbar = select('.navbar-default');
    if (selectHNavbar) {
        onscroll(document, () => {
            if (window.scrollY > 100) {
                selectHNavbar.classList.add('navbar-reduce');
                selectHNavbar.classList.remove('navbar-trans');
            } else {
                selectHNavbar.classList.remove('navbar-reduce');
                selectHNavbar.classList.add('navbar-trans');
            }
        });
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top');
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active');
            } else {
                backtotop.classList.remove('active');
            }
        };
        window.addEventListener('load', toggleBacktotop);
        onscroll(document, toggleBacktotop);
    }

    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove();
        });
    }

    /**
     * Search window open/close
     */
    let body = select('body');
    on('click', '.navbar-toggle-box', function (e) {
        e.preventDefault();
        body.classList.add('box-collapse-open');
        body.classList.remove('box-collapse-closed');
    });

    on('click', '.close-box-collapse', function (e) {
        e.preventDefault();
        body.classList.remove('box-collapse-open');
        body.classList.add('box-collapse-closed');
    });

    /**
     * Intro Carousel
     */
    new Swiper('.intro-carousel', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    /**
     * Property carousel
     */
    new Swiper('#property-carousel', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.propery-carousel-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

    /**
     * News carousel
     */
    new Swiper('#news-carousel', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.news-carousel-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

    /**
     * Testimonial carousel
     */
    new Swiper('#testimonial-carousel', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.testimonial-carousel-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    /**
     * Property Single carousel
     */
    new Swiper('#property-single-carousel', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.property-single-carousel-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    //$( "#draggerble-property" ).draggable();
})();

function getLatestPropertiesView(property) {
    return `
        <div class="carousel-item-b swiper-slide">
            <div class="card-box-a card-shadow">
                <div class="img-box-a">
                    <img src="${property.picture}" alt="${property.location}" class="img-a img-fluid" />
                </div>
                <div class="card-overlay">
                    <div class="card-overlay-a-content">
                        <div class="card-header-a">
                            <h2 class="card-title-a">
                                <a href="properties/${property.id}/property-single-${property.id}.html">${property.location}</a>
                            </h2>
                        </div>
                        <div class="card-body-a">
                            <div class="price-box d-flex">
                                <span class="price-a">${property.tenure} | $ ${property.price}</span>
                            </div>
                            <a href="properties/${property.id}/property-single-${property.id}.html" class="link-a">
                                View Property <span class="bi bi-chevron-right"></span>
                            </a>
                        </div>
                        <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                                <li>
                                    <h4 class="card-info-title">Area</h4>
                                    <span>${property.area}<sup>2</sup></span>
                                </li>
                                <li>
                                    <h4 class="card-info-title">Beds</h4>
                                    <span>${property.bedrooms}</span>
                                </li>
                                <li>
                                    <h4 class="card-info-title">Baths</h4>
                                    <span>${property.baths}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getOuPropertiesView(property) {
    return `
    <div class="col-md-4">
    <div class="card-box-a card-shadow">
      <div class="img-box-a">
        <img
          src="${property.picture}"
          alt=""
          class="img-a img-fluid"
        />
      </div>
      <div class="card-overlay">
        <div class="card-overlay-a-content">
          <div class="card-header-a">
            <h2 class="card-title-a">
              <a href="#"
                >${property.location}</a
              >
            </h2>
          </div>
          <div class="card-body-a">
            <div class="price-box d-flex">
              <span class="price-a">${property.tenure} | $ ${property.price}</span>
            </div>
            <a href="properties/${property.id}/property-single-${property.id}.html" class="link-a"
              >Click here to view
              <span class="bi bi-chevron-right"></span>
            </a>
          </div>
          <div class="card-footer-a">
            <ul class="card-info d-flex justify-content-around">
              <li>
                <h4 class="card-info-title">Area</h4>
                <span
                  >${property.area}m
                  <sup>2</sup>
                </span>
              </li>
              <li>
                <h4 class="card-info-title">Beds</h4>
                <span>${property.bedrooms}</span>
              </li>
              <li>
                <h4 class="card-info-title">Baths</h4>
                <span>${property.baths}</span>
              </li>
              <li>
                <p id="${property.id}">
                <button class="addFavourites"><i class="bi bi-heart fs-1" aria-hidden="true"></i></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    `;
}

function getFavouritesView(property) {
    return `
        <div class="col-md-4">
            <div class="card-box-d">
                <div class="card-img-d">
                    <img src="${property.picture}" alt="${property.location}" class="img-d img-fluid" />
                </div>
                <div class="card-overlay card-overlay-hover">
                    <div class="card-header-d">
                        <div class="card-title-d align-self-center">
                            <h3 class="title-d">
                                <a href="#"  class="link-two">${property.location}</a>
                            </h3>
                        </div>
                    </div>
                    <div class="card-footer-d">
                        <div class="socials-footer d-flex justify-content-center">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <p id="${property.id}">
                                    <button class="addFavourites"><i class="bi bi-trash fs-1" aria-hidden="true"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function setLatestPropertiesView(properties) {
    const output_container = document.querySelector('#latest-properties-output');

    properties.forEach(property => {
        output_container.innerHTML += getLatestPropertiesView(property);
    });
}

function setOuPropertiesView(properties) {
    const output_container = document.querySelector('#our-properties-output');

    properties.forEach(property => {
        output_container.innerHTML += getOuPropertiesView(property);
    });
}

function setFavouritesView(properties) {
    const output_container = document.querySelector('#your-favourites');

    properties.forEach(property => {
        output_container.innerHTML += getFavouritesView(property);
    });
}

function getCurrentFileName() {
    var path = window.location.pathname;
    var page = path.split('/').pop();
    var html = page.split('.');
    var currentFileName = html[0];
    return currentFileName;
}

function assignProperties(propertyType, properties) {
    switch (propertyType) {
        case 'index': {
            setLatestPropertiesView(properties);
            break;
        }
        case 'property-grid': {
            setOuPropertiesView(properties);
            break;
        }
        case 'favourites': {
            setFavouritesView(properties);
            break;
        }
    }
}

async function getProperties() {
    const data = await fetch('properties.json');
    const properties = await data.json();
    return properties;
}

async function setPropertiesBasedOnFile() {
    const file = getCurrentFileName();
    const properties = await getProperties();
    assignProperties(file, properties);
}

setPropertiesBasedOnFile();

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
											<img src="images/properties/${prop.picture}" alt="" class="agent-avatar img-fluid" />
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

        buildFavouriteList(favListList);

        const favouriteKey = 'favourites';
        localStorage.setItem(favouriteKey, JSON.stringify(favListList));

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

function buildFavouriteList(list) {
    $('#favList').html('');

    for (const obj of list) {
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
        const favouriteKey = 'favourites';
        const currentFavList = JSON.parse(localStorage.getItem(favouriteKey));
        const text = ui.draggable.find('p')?.context?.innerText;
        const finalFavouriteList = currentFavList.filter(item => item !== text);

        buildFavouriteList(finalFavouriteList);

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
