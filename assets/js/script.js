fetch("properties.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (properties) {
    let latest_properties_output = "";
    let gallery_output = "";
    let our_properties_output = "";

    for (let property of properties) {
      latest_properties_output += `<div class="carousel-item-b swiper-slide">
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
      </div>`;

      gallery_output += `<div class="carousel-item-c swiper-slide">
      <div class="card-box-b card-shadow news-box">
        <div class="img-box-b">
          <img
            src="assets/img/${property.picture}"
            alt=""
            class="img-b img-fluid"
          />
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
      </div>`;

      our_properties_output += ` <div class="col-md-4">
      <div class="card-box-a card-shadow">
        <div class="img-box-a">
          <img
            src="assets/img/properties/prop1.jpg"
            alt=""
            class="img-a img-fluid"
          />
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
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>`;
    }

    document.querySelector("#latest-properties-output").innerHTML = latest_properties_output;
    document.querySelector("#gallery-output").innerHTML = gallery_output;
    document.querySelector("#our-properties-output").innerHTML = our_properties_output;
  })
  .catch(function (err) {
    console.log(err);
  })