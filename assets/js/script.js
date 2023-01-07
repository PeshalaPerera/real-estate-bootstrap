fetch("properties.json")
.then(function(response){
    return response.json();
})
.then(function (properties) { 
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let property of properties) {
        out += `<div class="carousel-item-b swiper-slide">
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
    }

    placeholder.innerHTML = out;
})
.catch(function (err) {
  console.log(err);
})