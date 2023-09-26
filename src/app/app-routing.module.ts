import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CategoriesComponent } from './components/common/categories/categories.component';
import { FeatureComponent } from './components/pages/feature/feature.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SingupComponent } from './components/pages/singup/singup.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title:'Home : Electronics Strore'
  },
  {
    path:'categories',
    component: CategoriesComponent,
    title:'Cagtegories : Electronics Strore'
  },
  {
    path:'features',
    component: FeatureComponent,
    title:'Feature : Electronics Strore'
  },
  {
    path:'about',
    component: AboutComponent,
    title:'About : Electronics Strore'
  },
  {
    path:'login',
    component: LoginComponent,
    title:'Login : Electronics Strore'
  },
  {
    path:'signup',
    component: SingupComponent,
    title:'Signup : Electronics Strore'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
