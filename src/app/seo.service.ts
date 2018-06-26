import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private titleService: Title) { }

  generateTags(tags) 
  {
  	tags = {
  		title: 'ANGULAR SSR',
  		describtion: 'MY SEO FRIENDLY ANGULAR COMPONENT',
  		image: 'https://angularfirebase.com/images/logo.png',
  		slug: '',
  	}

  	this.titleService.setTitle(tags.title);
  	this.meta.updateTag({ name: "twitter:card", content: 'summery'});
  	this.meta.updateTag({ name: "twitter:card", content: '@angularfirebase'});
  	this.meta.updateTag({ name: "twitter:card", content: tags.title});
  	this.meta.updateTag({ name: "twitter:card", content: tags.description});
  	this.meta.updateTag({ name: "twitter:card", content: tags.image});

  	this.meta.updateTag({ property: "og:type", content: 'article'});
  	this.meta.updateTag({ property: "og:type", content: 'AngularFirebase'});
  	this.meta.updateTag({ property: "og:type", content: tags.title});
  	this.meta.updateTag({ property: "og:type", content: tags.description});
  	this.meta.updateTag({ property: "og:type", content: tags.image});
  	this.meta.updateTag({ property: "og:type", content: 'https://www.creativetao.com'});


  }

}
