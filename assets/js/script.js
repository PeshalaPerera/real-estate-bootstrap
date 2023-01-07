async function getProperties() {
    const data = await fetch('properties.json');
    const properties = await data.json();
    return properties;
}

function getLatestPropertiesView(property) {
    return `
        <div class="carousel-item-b swiper-slide">
            <div class="card-box-a card-shadow">
                <div class="img-box-a">
                    <img src="assets/img/${property.picture}" alt="" class="img-a img-fluid" />
                </div>
                <div class="card-overlay">
                    <div class="card-overlay-a-content">
                        <div class="card-header-a">
                            <h2 class="card-title-a">
                                <a href="property-single.html"
                                    >206 Mount <br />
                                    Olive Road Two</a
                                >
                            </h2>
                        </div>
                        <div class="card-body-a">
                            <div class="price-box d-flex">
                                <span class="price-a">rent | $ 12.000</span>
                            </div>
                            <a href="#" class="link-a"
                                >View Property
                                <span class="bi bi-chevron-right"></span>
                            </a>
                        </div>
                        <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                                <li>
                                    <h4 class="card-info-title">Area</h4>
                                    <span
                                        >340m
                                        <sup>2</sup>
                                    </span>
                                </li>
                                <li>
                                    <h4 class="card-info-title">Beds</h4>
                                    <span>2</span>
                                </li>
                                <li>
                                    <h4 class="card-info-title">Baths</h4>
                                    <span>4</span>
                                </li>
                                <li>
                                    <h4 class="card-info-title">Garages</h4>
                                    <span>1</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getGalleryView(property) {
    return `
        <div class="carousel-item-c swiper-slide">
            <div class="card-box-b card-shadow news-box">
                <div class="img-box-b">
                    <img src="assets/img/${property.picture}" alt="" class="img-b img-fluid" />
                </div>
                <div class="card-overlay">
                    <div class="card-header-b">
                        <div class="card-category-b">
                            <a href="#" class="category-b">${property.type}</a>
                        </div>
                        <div class="card-title-b">
                            <h2 class="title-2">
                                <a href="blog-single.html"
                                    >House is comming <br />
                                    new</a
                                >
                            </h2>
                        </div>
                        <div class="card-date">
                            <span class="date-b">18 Sep. 2017</span>
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
                    <img src="assets/img/${property.picture}" alt="" class="img-a img-fluid" />
                </div>
                <div class="card-overlay">
                    <div class="card-overlay-a-content">
                        <div class="card-header-a">
                            <h2 class="card-title-a">
                                <a href="#"
                                    >204 Mount <br />
                                    Olive Road Two</a
                                >
                            </h2>
                        </div>
                        <div class="card-body-a">
                            <div class="price-box d-flex">
                                <span class="price-a">rent | $ 12.000</span>
                            </div>
                            <a href="property-single.html" class="link-a"
                                >Click here to view
                                <span class="bi bi-chevron-right"></span>
                            </a>
                        </div>
                        <div class="card-footer-a">
                            <ul class="card-info d-flex justify-content-around">
                                <li>
                                    <h4 class="card-info-title">Area</h4>
                                    <span
                                        >340m
                                        <sup>2</sup>
                                    </span>
                                </li>
                                <li>
                                    <h4 class="card-info-title">Beds</h4>
                                    <span>2</span>
                                </li>
                                <li>
                                    <h4 class="card-info-title">Baths</h4>
                                    <span>4</span>
                                </li>
                                <li>
                                    <h4 class="card-info-title">Garages</h4>
                                    <span>1</span>
                                </li>
                                <li>
                                    <a href="#" class="link-one">
                                        <i class="bi bi-heart fs-1" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getOurGalleyView(property) {
    return `
        <div class="col-md-4">
            <div class="card-box-b card-shadow news-box">
                <div class="img-box-b">
                    <img src="assets/img/${property.picture}" alt="" class="img-b img-fluid" />
                </div>
                <div class="card-overlay">
                    <div class="card-header-b">
                        <div class="card-category-b">
                            <a href="blog-single.html" class="category-b">${property.type}</a>
                        </div>
                        <div class="card-title-b">
                            <h2 class="title-2">
                                <a href="blog-single.html"
                                    >Travel is comming <br />
                                    new</a
                                >
                                <br />
                                <a href="#" class="link-a"
                                    >View Property
                                    <span class="bi bi-chevron-right"></span>
                                </a>
                            </h2>
                        </div>
                        <div class="card-date">
                            <span class="date-b">18 Sep. 2017</span>
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
                    <img src="assets/img/${property.picture}" alt="" class="img-d img-fluid" />
                </div>
                <div class="card-overlay card-overlay-hover">
                    <div class="card-header-d">
                        <div class="card-title-d align-self-center">
                            <h3 class="title-d">
                                <a href="#" class="link-two"
                                    >Margaret Sotillo <br />
                                    Escala</a
                                >
                            </h3>
                        </div>
                    </div>
                    <div class="card-body-d">
                        <p class="content-d color-text-a">
                            Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                        </p>
                    </div>
                    <div class="card-footer-d">
                        <div class="socials-footer d-flex justify-content-center">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a href="#" class="link-one">
                                        <i class="bi bi-trash fs-1" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

async function assignProperties(propertyType) {
    const properties = await getProperties();

    switch (propertyType) {
        case 1: {
            const output_container = document.querySelector('#latest-properties-output');

            properties.forEach(property => {
                output_container.innerHTML += getLatestPropertiesView(property);
            });

            break;
        }
        case 2: {
            const output_container = document.querySelector('#gallery-output');

            properties.forEach(property => {
                output_container.innerHTML += getGalleryView(property);
            });

            break;
        }
        case 3: {
            const output_container = document.querySelector('#our-properties-output');

            properties.forEach(property => {
                output_container.innerHTML += getOuPropertiesView(property);
            });

            break;
        }
        case 4: {
            const output_container = document.querySelector('#our-gallery');

            properties.forEach(property => {
                output_container.innerHTML += getOurGalleyView(property);
            });

            break;
        }
        case 5: {
            const output_container = document.querySelector('#your-favourites');

            properties.forEach(property => {
                output_container.innerHTML += getFavouritesView(property);
            });

            break;
        }
    }
}
