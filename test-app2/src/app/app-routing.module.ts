import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/shared/nav/admin/admin.component';
import { SearchComponent } from './components/shared/nav/search/search.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
    {
      path: "ADMIN-LOGIN", component: AdminComponent
    },
    {
      path: "HOME", component: ShoppingCartComponent
    },
    {
      path: "SEARCH", component: SearchComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
