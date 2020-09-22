import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TermsUseComponent } from './pages/terms-use/terms-use.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { GroupDetailsComponent } from './pages/group-details/group-details.component';


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
    path: 'thankyou',
    component: ThankyouComponent,
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
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          animation: 5
        }
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        data: {
          animation: 6
        }
      },
      {
        path: 'search',
        component: SearchComponent,
        data: {
          animation: 7
        }
      },
      {
        path: 'group_details',
        component: GroupDetailsComponent,
        data: {
          animation: 9
        }
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ],
    data: {
      animation: 4
    }
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent,
    data: {
      animation: 8
    }
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
