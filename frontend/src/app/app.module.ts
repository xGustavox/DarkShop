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
import { ProductGroupCardComponent } from './components/product-group-card/product-group-card.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SearchComponent } from './pages/search/search.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { NavCategoriesComponent } from './components/nav-categories/nav-categories.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardProductListComponent } from './components/card-product-list/card-product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ShoopingCartComponent } from './components/shooping-cart/shooping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { ModalShoppingCartComponent } from './pages/modal-shopping-cart/modal-shopping-cart.component';
import { BotaoComponent } from './components/botao/botao.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ToastrModule } from 'ngx-toastr';
import { CustomToastrComponent } from './components/custom-toastr/custom-toastr.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';

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
    ModalShoppingCartComponent,
    BotaoComponent,
    CheckboxComponent,
    CustomToastrComponent,
    ThankyouComponent
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
