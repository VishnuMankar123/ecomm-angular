import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FeatureComponent } from './components/pages/feature/feature.component';
import { CustomNavbarComponent } from './components/common/custom-navbar/custom-navbar.component';
import { CategoriesComponent } from './components/common/categories/categories.component';
import { SingupComponent } from './components/pages/singup/singup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth/auth.reducers';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { DashboradComponent } from './components/admin/dashborad/dashborad.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    FeatureComponent,
    CustomNavbarComponent,
    CategoriesComponent,
    SingupComponent,
    DashboardComponent,
    DashboradComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(
      {
        positionClass:'toast-top-right',
        progressBar:true,
      }
    ),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({authReducer : authReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
