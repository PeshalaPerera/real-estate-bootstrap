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
