import { Component, OnInit } from '@angular/core';
import { Userproperty } from 'classes/userproperty';

 let myHero =  new Userproperty('email@mail.com','password');

console.log("Hello world !---");
console.log("Hello world !---");
 console.log(myHero);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	foods: Object;
	submitted = false;
	model =  new Userproperty('email@mail.com','password');
	onSubmit() 
	{
		this.submitted = true;
	}

	loginFormClear() 
	{
		this.model = new Userproperty('','');
	}

	get diagnostic() { return JSON.stringify(this.model); }
  	
  	constructor() { }

  	ngOnInit() {
  	
  		this.foods = [
    		{value: 'steak-0', viewValue: 'Steak'},
    		{value: 'pizza-1', viewValue: 'Pizza'},
    		{value: 'tacos-2', viewValue: 'Tacos'}
  		];
	}
}
