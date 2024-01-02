import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: '', redirectTo: 'home', pathMatch: 'full' }],
  },
  {
    path: 'contact',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
