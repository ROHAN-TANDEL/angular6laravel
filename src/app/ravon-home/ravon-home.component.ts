import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
//import $ from "jquery";
// import $ = require('jquery')

@Component({
  selector: 'app-ravon-home',
  templateUrl: './ravon-home.component.html',
  styleUrls: ['./ravon-home.component.scss']
})

export class RavonHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	//main carousal START 
//   	 $(document).ready(function(){

//   	 	$('.slider').slick({
// 		  slidesToShow: 1,
// 		  slidesToScroll: 1,
// 		  arrows: false,
// 		  fade: true,
// 		  autoplay: true
// 		});

// 		$('.slider-navi').slick({
// 		  initialSlide: 0,
// 		  slidesToShow: 6,
// 		  slidesToScroll: 4,
// 		  infinite: false,
// 		  // arrows: true,
// 		  fade: false,
// 		  rtl:false,
// 		  prevArrow: '<button type="button" class="slick-prev"><i class="material-icons">keyboard_arrow_left</i></button>',
// 		  nextArrow: '<button type="button" class="slick-next"><i class="material-icons">keyboard_arrow_right</i></button>',
// 		  lazyLoad:'progressive', //ondemand
// 		  edgeFriction: 0.13,
// 		  autoplay: false
// 		});

// 		$('.slider-for').slick({
// 			slidesToShow: 5,
// 			slidesToScroll: 5,
// 			arrows: false,
// 			fade: true,
// 			asNavFor: '.slider-nav'
// 		});
// 		$('.slider-nav').slick({
// 			slidesToShow: 5,
// 			slidesToScroll: 5,
// 			asNavFor: '.slider-for',
// 			dots: false,
// 			centerMode: true,
// 			focusOnSelect: true
// 		});

				

//        	$('.mini-slider').slick({
// 	    	slidesToShow: 1,
// 			slidesToScroll: 1,
// 			autoplay: true,
// 			autoplaySpeed: 1800,
// 	    	dots: false,
// 	    	infinite: true,
// 	    	cssEase: 'linear'
// 		});

//   	//main carousal END
//   	$('.center-data').slick({
//   centerMode: true,
//   centerPadding: '100px',
//   slidesToShow: 5,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });

// 	// $('.mini-slider-1').slick({
// 	// 	slidesToShow: 1,
// 	// 	slidesToScroll: 1,
// 	// 	arrows: false,
// 	// 	fade: true,
// 	// 	asNavFor: '.mini-slider-1-nav'
// 	// });
// 	// $('.mini-slider-1-nav').slick({
// 	// 	slidesToShow: 3,
// 	// 	slidesToScroll: 1,
// 	// 	asNavFor: '.slider-for',
// 	// 	dots: true,
// 	// 	centerMode: true,
// 	// 	focusOnSelect: true
// 	// });
//     });

  }

}
