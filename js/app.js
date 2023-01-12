(function () {
  function getNavigationHTML() {
    function getCurrentPage() {
      const path = window.location.pathname;
      const page = path.split("/").pop();
      console.log(`Current page: ${page}`);
      return page;
    }

    function getStyles(isActive) {
      return isActive ? "active" : "";
    }

    const currentPage = getCurrentPage();

    const indexPage = "index.html";
    const findPage = "find.html";
    const favouritesPage = "favourites.html";
    const propertyGridPage = "property-grid.html";

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
    <img class="logo" src="assets/img/logo.png" alt="dreamHome" />
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
                                                background-image: url(assets/img/footerGallery/insta-1.jpg);
                                            "
                                        ></a>
                                    </div>
                                    <div class="col-4 col-md-4 p-1">
                                        <a
                                            href="#"
                                            class="img rounded"
                                            style="
                                                background-image: url(assets/img/footerGallery/insta-2.jpg);
                                            "
                                        ></a>
                                    </div>
                                    <div class="col-4 col-md-4 p-1">
                                        <a
                                            href="#"
                                            class="img rounded"
                                            style="
                                                background-image: url(assets/img/footerGallery/insta-3.jpg);
                                            "
                                        ></a>
                                    </div>
                                    <div class="col-4 col-md-4 p-1">
                                        <a
                                            href="#"
                                            class="img rounded"
                                            style="
                                                background-image: url(assets/img/footerGallery/insta-4.jpg);
                                            "
                                        ></a>
                                    </div>
                                    <div class="col-4 col-md-4 p-1">
                                        <a
                                            href="#"
                                            class="img rounded"
                                            style="
                                                background-image: url(assets/img/footerGallery/insta-5.jpg);
                                            "
                                        ></a>
                                    </div>
                                    <div class="col-4 col-md-4 p-1">
                                        <a
                                            href="#"
                                            class="img rounded"
                                            style="
                                                background-image: url(assets/img/footerGallery/insta-6.jpg);
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
    document.getElementById("navigation").innerHTML = getNavigationHTML();
    document.getElementById("footer").innerHTML = getFooterHTML();
  } catch (error) {}

})();
