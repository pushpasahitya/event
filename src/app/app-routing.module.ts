import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FirstComponent } from './first/first.component';
import { PackageComponent } from './package/package.component';
import { PriceComponent } from './price/price.component';
import { ReviewComponent } from './review/review.component';

import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'',redirectTo:'first',pathMatch:'full'},
  {path:"package",component:PackageComponent},
  {path:"test",component:TestComponent},
  {path:"first",component:FirstComponent},
  {path:"about",component:AboutComponent},
  {path:"price",component:PriceComponent},
  {path:"review",component:ReviewComponent},
  {path:"contact",component:ContactComponent},  {path:'**',component:FirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
