import $ from 'jquery';

$.noConflict();
$(document).ready(function($) {
	$('#menuToggle').on('click', function(event) {
		$('body').toggleClass('open');
	});
	$('.search-trigger').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').addClass('open');
	});
	$('.search-close').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').removeClass('open');
	});
});