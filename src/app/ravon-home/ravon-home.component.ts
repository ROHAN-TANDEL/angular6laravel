import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
//import $ from "jquery";
import $ = require('jquery')

@Component({
  selector: 'app-ravon-home',
  templateUrl: './ravon-home.component.html',
  styleUrls: ['./ravon-home.component.scss']
})
export class RavonHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	//main carousal START 
  	 $(document).ready(function(){

  	 	$('.slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  autoplay: true
		});

		 $('.slider-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.slider-nav',
			 autoplay: true
		});
		$('.slider-nav').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.slider-for',
		  dots: false,
		  centerMode: true,
		  focusOnSelect: true

		});
				

       	$('.mini-slider').slick({
	    	slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1800,
	    	dots: false,
	    	infinite: true,
	    	cssEase: 'linear'
		});

  	//main carousal END
  	
	// $('.mini-slider-1').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	fade: true,
	// 	asNavFor: '.mini-slider-1-nav'
	// });
	// $('.mini-slider-1-nav').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.slider-for',
	// 	dots: true,
	// 	centerMode: true,
	// 	focusOnSelect: true
	// });
    });

  }

}
