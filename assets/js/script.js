function getLatestPropertiesView(property) {
    return `
        <div class="carousel-item-b swiper-slide">
            <div class="card-box-a card-shadow">
                <div class="img-box-a">
                    <img src="assets/img/${property.picture}" alt="${property.location}" class="img-a img-fluid" />
                </div>
                <div class="card-overlay">
                    <div class="card-overlay-a-content">
                        <div class="card-header-a">
                            <h2 class="card-title-a">
                                <a href="property-single.html">${property.location}</a>
                            </h2>
                        </div>
                        <div class="card-body-a">
                            <div class="price-box d-flex">
                                <span class="price-a">${property.tenure} | $ ${property.price}</span>
                            </div>
                            <a href="#" class="link-a">
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

function getGalleryView(property) {
    return `
        <div class="carousel-item-c swiper-slide">
            <div class="card-box-b card-shadow news-box">
                <div class="img-box-b">
                    <img src="assets/img/${property.picture}" alt="${property.location}" class="img-b img-fluid"/>
                </div>
                <div class="card-overlay">
                    <div class="card-header-b">
                        <div class="card-category-b">
                            <a href="#" class="category-b">${property.type}</a>
                        </div>
                        <div class="card-title-b">
                            <h2 class="title-2">
                                <a href="blog-single.html">${property.location}</a>
                            </h2>
                        </div>
                        <div class="card-date">
                            <span class="date-b">${property.added.day} ${property.added.month} ${property.added.year}</span>
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
          src="assets/img/${property.picture}"
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

function getOurGalleyView(property) {
    return `
        <div class="col-md-4">
            <div class="card-box-b card-shadow news-box">
                <div class="img-box-b">
                    <img src="assets/img/${property.picture}" alt="${property.location}" class="img-b img-fluid" />
                </div>
                <div class="card-overlay">
                    <div class="card-header-b">
                        <div class="card-category-b">
                            <a href="blog-single.html" class="category-b">${property.type}</a>
                        </div>
                        <div class="card-title-b">
                            <h2 class="title-2">
                                 <a href="#">${property.location}</a>
                                <br />
                                <a href="#" class="link-a">
                                    View Property <span class="bi bi-chevron-right"></span>
                                </a>
                            </h2>
                        </div>
                        <div class="card-date">
                            <span class="date-b">${property.added.day} ${property.added.month} ${property.added.year}</span>
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
                    <img src="assets/img/${property.picture}" alt="${property.location}" class="img-d img-fluid" />
                </div>
                <div class="card-overlay card-overlay-hover">
                    <div class="card-header-d">
                        <div class="card-title-d align-self-center">
                            <h3 class="title-d">
                                <a href="#"  class="link-two">${property.location}</a>
                            </h3>
                        </div>
                    </div>
                    <div class="card-body-d">
                        <p class="content-d color-text-a">${property.description}</p>
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

function setGalleryView(properties) {
    const output_container = document.querySelector('#gallery-output');

    properties.forEach(property => {
        output_container.innerHTML += getGalleryView(property);
    });
}

function setOuPropertiesView(properties) {
    const output_container = document.querySelector('#our-properties-output');

    properties.forEach(property => {
        output_container.innerHTML += getOuPropertiesView(property);
    });
}

function setOurGalleyView(properties) {
    const output_container = document.querySelector('#our-gallery');

    properties.forEach(property => {
        output_container.innerHTML += getOurGalleyView(property);
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
            setGalleryView(properties);
            break;
        }
        // case 'find': {
        //     setGalleryView(properties);
        //     break;
        // }
        case 'property-grid': {
            setOuPropertiesView(properties);
            break;
        }
        case 'gallery': {
            setOurGalleyView(properties);
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
