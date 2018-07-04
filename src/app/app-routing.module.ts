import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChatnowComponent } from './chatnow/chatnow.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { RavonUserboardComponent } from './ravon-userboard/ravon-userboard.component';
import { RavonLoginComponent } from './ravon-login/ravon-login.component';
import { RavonHomeComponent } from './ravon-home/ravon-home.component';
// import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: RavonLoginComponent
  },
  {
    path: 'userboard',
    component: RavonUserboardComponent
  },
  {
    path: 'home',
    component: RavonHomeComponent
  },
  {
    path: 'animals/:name',
    component: AnimalDetailComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'chatnow',
    component: ChatnowComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


