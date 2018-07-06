import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNhMDRmMzQxZTM5YjIxNTk2MGRlN2U5NTljNjE0MDFmMTc1NGZmNzc4MmFmNTBjMDQwNDYyMDQwZDFhNjQ0MGI2NGVhZTRkOTg1ODBlNjg2In0.eyJhdWQiOiI0IiwianRpIjoiM2EwNGYzNDFlMzliMjE1OTYwZGU3ZTk1OWM2MTQwMWYxNzU0ZmY3NzgyYWY1MGMwNDA0NjIwNDBkMWE2NDQwYjY0ZWFlNGQ5ODU4MGU2ODYiLCJpYXQiOjE1MzA2MDEyNDQsIm5iZiI6MTUzMDYwMTI0NCwiZXhwIjoxNTYyMTM3MjQ0LCJzdWIiOiIxMCIsInNjb3BlcyI6W119.VxSSVESGiaZMuI58GKRrYTHdFuiFdnvil1kT3Pu8TWL4zlgvrBNxZXHaARdQGk6kquPJrznVJJe-8DkBXvJC_kb1onHQl-z95sGZZgmA88s0M7ak6iW80G0SeNWjOZYSoZTAso_OjP7A460Csx7U7NC874BvAXPHfRHMMj8oG8x80r6jTYRil1pDaWIY4KVD_Tpdf9978nAiIy14D48ZiYdGTX9Fp4SzUtPwgOxD_QYPx28prMfSrddOkxSR2Llqn-C--R9-4cLp0A91zxh5UoHKImm6UM5-m4OSi82N3yco5pjn_2yhmgbPZ9NvEZ2ohAHRNGxJgLqOCpzHODOMaQfmjLB-i1lljqKPR8hDX2S_27xHOjnlrx8J0HnZmVUeFDAd4nD0Nln718aQy7KuhppE-iYwwaFiUvfHNFC2ZTwH7lg-Ty7p3s2wc8nd9X0VpfL98CyUMrtH4sUL6knNrp0NVePuYiCe-TTA4g6Iyn0WMJ70J7sN2beY1_RVZNULZktQAJqgciYykj-QWUYTjI44F9j-W1-58T6FWkpbjaE4BnJ5Q53xFgRCOdVogDGrGrzXVy1Ikg3MKCuqMklhLG1JDjbHUhQ6l9yU4J4jHf8PiWjq6PhLgF8pX_a8f2GDo4n7aKoCuFym29hVpUB-SRn7v0OFQTKQt0aEO65p84k' })
};

@Component({
  selector: 'app-ravon-topboard',
  templateUrl: './ravon-topboard.component.html',
  styleUrls: ['./ravon-topboard.component.scss']
})
export class RavonTopboardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

  	//this.create(1,"nothing","but true");
  }

    create(userId, title, body) {
      const postedData = { userid: 1, title: title, body: body };
      return this.http.get('http://192.168.2.96:8000/api/todos', httpOptions).subscribe(result => {
        console.log(result);
      }, error => console.log('There was an error: '));
  }


}




