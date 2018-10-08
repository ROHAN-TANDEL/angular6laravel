import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute } from '@angular/router';
import  { AngularFirestore } from 'angularfire2/firestore';
import  { SeoService } from '../seo.service';

import  { tap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})  

export class AnimalDetailComponent implements OnInit {

	animals$;//activated route

  constructor( 
  	private afs: AngularFirestore,
  	private seo: SeoService,
  	private route: ActivatedRoute
  	) { }

  ngOnInit() {

  	const id = this.route.snapshot.paramMap.get('name');
  }

}

