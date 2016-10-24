$(document).ready(function(){
	var linkDiv = $('#nav-links');
	var triggerLink = $('a.link-trigger');	

	var svg_hamburger = new Snap('.control-hamburger');
	Snap.load("svg/hamburger.svg",function(f){

		sv_top_bar = f.select("#sv-top-bar");
		sv_mid_bar_1 = f.select("#sv-mid-bar-1");
		sv_mid_bar_2 = f.select("#sv-mid-bar-2");
		sv_bottom_bar = f.select("#sv-bottom-bar");

		triggerLink.click(function(){
			if(linkDiv.hasClass('links-closed')){
				linkDiv.removeClass('links-closed');
				linkDiv.addClass('links-open');
				sv_top_bar.animate({opacity:"0"}, 1000, mina.elastic);
				sv_mid_bar_1.animate({transform:"rotate(45 50 50)"}, 1000, mina.elastic);
				sv_mid_bar_2.animate({transform:"rotate(-45 50 50)"}, 1000, mina.elastic);
				sv_bottom_bar.animate({opacity:"0"}, 1000, mina.elastic);

			}else if(linkDiv.hasClass('links-open')){
				linkDiv.removeClass('links-open');
				linkDiv.addClass('links-closed');
				linkDiv.addClass('links-fade');
				sv_top_bar.animate({opacity:"1"}, 1000, mina.elastic);
				sv_mid_bar_1.animate({transform:"rotate(0 50 50)"}, 1000, mina.elastic);
				sv_mid_bar_2.animate({transform:"rotate(0 50 50)"}, 1000, mina.elastic);
				sv_bottom_bar.animate({opacity:"1"}, 1000, mina.elastic);
			}
		});
			
		svg_hamburger.append(f);
	});

	if (/Edge\/\d./i.test(navigator.userAgent)){
	   // This is Microsoft Edge
	   $(".control-dashboard").append("<img src='svg/dashboard.svg' alt='Logo' height='30px'>");
	   $(".control-hamburger").append("<img src='svg/hamburger.svg' alt='Logo' height='30px'>");
	}	
});