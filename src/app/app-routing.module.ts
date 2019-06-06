import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{path:'',component:MenuComponent,children:[
                        {path:'',component:MenuComponent},
                        {path:"login",component: LoginComponent},
                        {path:"contact",component:ContactComponent},
                        {path:"about",component:AboutComponent},
]}];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
