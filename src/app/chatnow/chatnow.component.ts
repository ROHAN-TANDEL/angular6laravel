import { Component, OnInit } from '@angular/core';
import { DataService } from 'services/data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatnow',
  templateUrl: './chatnow.component.html',
  styleUrls: ['./chatnow.component.scss']
})
export class ChatnowComponent implements OnInit {
	chat$: Object;
  	constructor(private data: DataService,private http: HttpClient) { }

  ngOnInit() {
  	var catched = this.http.get('http://localhost:4203');
  	 //   this.data.doChat().subscribe(
    //   data => this.chat$ = data 
    // );
//});
  	   console.log((catched));
  }
  inputData ='';
  dynamicData(inputData: string) {

    this.inputData = this.inputData;
  }
}

  
