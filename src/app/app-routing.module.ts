import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TermsUseComponent } from './pages/terms-use/terms-use.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      animation: 1
    }
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      animation: 2
    }
  },
  {
    path: 'terms-use',
    component: TermsUseComponent,
    data: {
      animation: 3
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      animation: 4
    }
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
