// TODO: No longer necessary
// const searchBtn = document.querySelector('#search-property-btn');

// async function searchProperty(type, city, bedroomsCount, bathroomCount, garagesCount, minPrice, maxPrice) {
//     const properties = await getProperties();

//     const filteredProperties = properties
//         .filter(property => property.id)
//         .filter(property => type === 'all' || property.type === type)
//         .filter(property => city === 'all' || property.city === type)
//         .filter(property => bedroomsCount === 'any' || property.bedrooms >= bedroomsCount)
//         .filter(property => bathroomCount === 'any' || property.baths >= bathroomCount)
//         .filter(property => garagesCount === 'any' || property.garages >= garagesCount)
//         .filter(property => property.minPrice >= minPrice)
//         .filter(property => property.maxPrice >= maxPrice);

//     console.log(filteredProperties);

//     setGalleryView(filteredProperties);
// }

// searchBtn.addEventListener('click', e => {
//     e.preventDefault();
//     const searchTypeInput = document.getElementById('search-type-input');
//     const searchCityInput = document.getElementById('search-city-input');
//     const searchBedroomsInput = document.getElementById('search-bedrooms-input');
//     const searchBathroomsInput = document.getElementById('search-bathrooms-input');
//     const searchGaragesInput = document.getElementById('search-garages-input');
//     const searchMinPriceInput = document.getElementById('search-min-price-input');
//     const searchMaxPriceInput = document.getElementById('search-max-price-input');

//     const type = searchTypeInput.value;
//     const city = searchCityInput.value;
//     const bedroomsCount = searchBedroomsInput.value;
//     const bathroomCount = searchBathroomsInput.value;
//     const garagesCount = searchGaragesInput.value;
//     const minPrice = searchMinPriceInput.value;
//     const maxPrice = searchMaxPriceInput.value;

//     searchProperty(type, city, bedroomsCount, bathroomCount, garagesCount, minPrice, maxPrice);
// });
