/**
 * Main JavaScript
 * Site Name
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:
 */

function on_site_load() {

	$('#button_girl').click(function(event){
		event.preventDefault();
		$('div.img_girl').addClass("hidden");
		$('div.pricing, div.call_to_action').removeClass("hidden");
	})
}

$(on_site_load);
