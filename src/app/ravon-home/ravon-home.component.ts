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
  	 $(document).ready(function(){
       	$('.slider').slick({
	    	slidesToShow: 3,
	    	dots: true,
	    	infinite: true,
	    	cssEase: 'linear'
		});
    });

  }

}
