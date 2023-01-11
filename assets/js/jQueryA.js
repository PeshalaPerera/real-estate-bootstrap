$(function() {
	$("#maxBedroomsSpinner").spinner({
		min: 0,
		max: 12,
		spin: function(event, ui) {
			$(this).change();
		}
	});
});

$(function() {
	$("#minBedroomsSpinner").spinner({
		min: 0,
		max: 12,
		spin: function(event, ui) {
			$(this).change();
		}
	});
});

$(function() {
	$("#slider-range").slider({
		range:true,
		min: 249500,
		max: 750000,
		values: [ 75, 300 ],
		slide: function( event, ui ){
			$("#priceRange").val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
		}
	});
	
	$("#priceRange").val(" £" + $(" #slider-range").slider( "values", 0 ) + " - £" + $("#slider-range").slider( "values", 1 ) );
});

$(function() {
	$( "#Search" ).on("click", function(){
		
		var searchType = $("#searchType").val();
	    var propType =  $("#searchPropertyType").val();
        var maxBed =  $("#maxBedroomsSpinner").val();
        var minBed =  $("#minBedroomsSpinner").val();
		var baths =  $("#searchBathroomsInput").val();
		var minPrice = $("#slider-range").slider("option", "values")[0];
		var maxPrice = $("#slider-range").slider("option", "values")[1];
		
		var output="";
		
		output=`<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="row">
					<div class="col-md-6">
						<div class="agent-avatar-box">
							<img src="assets/img/agent-7.jpg" alt="" class="agent-avatar img-fluid" />
						</div>
					</div>
					<div class="col-md-5 section-md-t3">
						<div class="agent-info-box">
							<div class="agent-title">
								<div class="title-box-d">
									<h3 class="title-d">
										Margaret Stone <br />
										Escala
									</h3>
								</div>
							</div>
							<div class="agent-content mb-3">
								<p class="content-d color-text-a">
									Sed porttitor lectus nibh. Praesent sapien massa, convallis a
									pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis
									porttitor volutpat. Vivamus suscipit tortor eget felis porttitor
									volutpat.
								</p>
								<div class="info-agents color-a">
									<p>
										<strong>Phone: </strong>
										<span class="color-text-a"> +54 356 945234 </span>
									</p>
									<p>
										<strong>Mobile: </strong>
										<span class="color-text-a"> 999 123 456 789</span>
									</p>
									<p>
										<strong>Email: </strong>
										<span class="color-text-a"> agents@example.com</span>
									</p>
									<p>
										<strong>skype: </strong>
										<span class="color-text-a"> Margaret.Es</span>
									</p>
									<p>
										<strong>Email: </strong>
										<span class="color-text-a"> agents@example.com</span>
									</p>
								</div>
							</div>
							<div class="socials-footer">
								<ul class="list-inline">
									<li class="list-inline-item">
										<a href="#" class="link-one">
											<i class="bi bi-facebook" aria-hidden="true"></i>
										</a>
									</li>
									<li class="list-inline-item">
										<a href="#" class="link-one">
											<i class="bi bi-twitter" aria-hidden="true"></i>
										</a>
									</li>
									<li class="list-inline-item">
										<a href="#" class="link-one">
											<i class="bi bi-instagram" aria-hidden="true"></i>
										</a>
									</li>
									<li class="list-inline-item">
										<a href="#" class="link-one">
											<i class="bi bi-linkedin" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

		<p></p>`;

		   for (var i in properties) {
			console.log(properties);

				// if (( searchType == data.properties[i].type) || (searchType=="Any")) {
					// if (( propType == data.properties[i].type) || (propType=="Any")) {
					// 	if (( minBed >= data.properties[i].bedrooms && maxBed <= data.properties[i].bedrooms )) {
					// 		if (( baths == data.properties[i].type) || (baths=="Any")) {
					// 			if (( data.properties[i].price >= minPrice && data.properties[i].price <= maxPrice )) {
									output=`<div class="container">
									<div class="row">
										<div class="col-sm-12">
											<div class="row">
												<div class="col-md-6">
													<div class="agent-avatar-box">
														<img src="assets/img/agent-7.jpg" alt="" class="agent-avatar img-fluid" />
													</div>
												</div>
												<div class="col-md-5 section-md-t3">
													<div class="agent-info-box">
														<div class="agent-title">
															<div class="title-box-d">
																<h3 class="title-d">
																	Margaret Stone <br />
																	Escala
																</h3>
															</div>
														</div>
														<div class="agent-content mb-3">
															<p class="content-d color-text-a">
																Sed porttitor lectus nibh. Praesent sapien massa, convallis a
																pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis
																porttitor volutpat. Vivamus suscipit tortor eget felis porttitor
																volutpat.
															</p>
															<div class="info-agents color-a">
																<p>
																	<strong>Phone: </strong>
																	<span class="color-text-a"> +54 356 945234 </span>
																</p>
																<p>
																	<strong>Mobile: </strong>
																	<span class="color-text-a"> 999 123 456 789</span>
																</p>
																<p>
																	<strong>Email: </strong>
																	<span class="color-text-a"> agents@example.com</span>
																</p>
																<p>
																	<strong>skype: </strong>
																	<span class="color-text-a"> Margaret.Es</span>
																</p>
																<p>
																	<strong>Email: </strong>
																	<span class="color-text-a"> agents@example.com</span>
																</p>
															</div>
														</div>
														<div class="socials-footer">
															<ul class="list-inline">
																<li class="list-inline-item">
																	<a href="#" class="link-one">
																		<i class="bi bi-facebook" aria-hidden="true"></i>
																	</a>
																</li>
																<li class="list-inline-item">
																	<a href="#" class="link-one">
																		<i class="bi bi-twitter" aria-hidden="true"></i>
																	</a>
																</li>
																<li class="list-inline-item">
																	<a href="#" class="link-one">
																		<i class="bi bi-instagram" aria-hidden="true"></i>
																	</a>
																</li>
																<li class="list-inline-item">
																	<a href="#" class="link-one">
																		<i class="bi bi-linkedin" aria-hidden="true"></i>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
				
								<p></p>
									`;
				// 				}
				// 			}
				// 		}
				// 	}
				}
			// }
				document.getElementById( "property_single_placeholder" ).innerHTML = output;
		   });

		   document.getElementById( "property_single_placeholder" ).innerHTML = output;
	});
	