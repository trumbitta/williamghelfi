---
base_url: /salesbury-1.0.0
---
$(function() {

	"use strict";
	var defaultcolor = 'lilac';

	//color switch
	// --------------------------------
	$('.color-switcher a').click(function() {
		var c = $(this).attr('href').replace('#','');
		var cacheBuster = 3 * Math.floor(Math.random() * 6);
		$('.color-switcher a').removeClass('active');
		$('.color-switcher a.'+ c).addClass('active');

		$('#color-scheme').attr('href','{{ page.base_url }}/css/salesbury-'+ c +'.css?x='+ cacheBuster);
	});

	//background switch
	// --------------------------------
	$('.background-switcher a').click(function() {
		var c = $(this).attr('href').replace('#','');
		var cacheBuster = 3 * Math.floor(Math.random() * 6);
		$('.background-switcher a').removeClass('active');
		$('.background-switcher a.'+ c).addClass('active');

		$('#background-pattern').attr('href','{{ page.base_url }}/css/salesbury-bg-'+ c +'.css?x='+ cacheBuster);
	});

});