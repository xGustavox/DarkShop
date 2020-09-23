import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningOnlyMobileComponent } from './pages/warning-only-mobile/warning-only-mobile.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TermsUseComponent } from './pages/terms-use/terms-use.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductGroupCardComponent } from './shared/components/product-group-card/product-group-card.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SearchComponent } from './pages/search/search.component';
import { NavTabsComponent } from './shared/components/nav-tabs/nav-tabs.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { NavCategoriesComponent } from './shared/components/nav-categories/nav-categories.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import { CardProductListComponent } from './shared/components/card-product-list/card-product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ShoopingCartComponent } from './shared/components/shooping-cart/shooping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { BotaoComponent } from './shared/components/botao/botao.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { ToastrModule } from 'ngx-toastr';
import { CustomToastrComponent } from './shared/components/custom-toastr/custom-toastr.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { GroupDetailsComponent } from './pages/group-details/group-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningOnlyMobileComponent,
    LoginComponent,
    WelcomeComponent,
    TermsUseComponent,
    ProductGroupCardComponent,
    HomeComponent,
    CategoriesComponent,
    SearchComponent,
    NavTabsComponent,
    TabsComponent,
    NavCategoriesComponent,
    FilterComponent,
    CardProductListComponent,
    ProductDetailComponent,
    ShoopingCartComponent,
    LoadingComponent,
    BotaoComponent,
    CheckboxComponent,
    CustomToastrComponent,
    ThankyouComponent,
    GroupDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      toastComponent: CustomToastrComponent
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
