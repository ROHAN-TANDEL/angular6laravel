import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getUsers()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  
  getUser(userId)
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  
  doChat()
  {
    return this.http.get('http://localhost:4203')
  }
  
  getPost()
  {
    return this.http.get('http://localhost:4203')
  }

  Signup(email)
  {
//   const httpOptions = {
//     headers: new HttpHeaders({ 
//       'Access-Control-Allow-Origin':'http://localhost:4200','Access-Control-Allow-Headers':'*'})
//   };
// const postedData = {
//   "client_id": "xcKBZqprT3GS1BjG8RBKgv7Py47f0XuY",
//   "email": "rohan.t+7@scriptbees.com",
//   "password": "Rohan@123",
//   "connection": "Username-Password-Authentication",
//   "user_metadata": { "plan": "silver", "enrollment_id": "340" }
// }
 var emailas    = 'email=56rohan@dd.com&';
 var password = 'password=Rohan@123&';
 var firstname =  'user_metadata[plans]=good&';
 var enrollment_id = 'user_metadata[enrollment_id]=441';
 let url      = 'https://krishananrohan.auth0.com/dbconnections/signup?'+emailas+password+'connection=Username-Password-Authentication'+firstname+enrollment_id;
//     = {email: 'fa@fa.com', password: 'asdasd'};//{ email: this.getData.email, password: this.getData.password };
      // return this.http.post('https://krishananrohan.auth0.com/dbconnections/signup', postedData, httpOptions).subscribe(result => {
      //console.log(JSON.stringify(result));
      return this.http.get(url);
  }
  Login() {


let url  = 'https://krishananrohan.auth0.com/authorize?response_type=token&client_id=vYzQNhYdoqnCPBGMeAp407uMNLx594Xk&connection=Username-Password-Authentication&redirect_uri=http://localhost:4200&state=false';
  return this.http.get(url);


  }
}