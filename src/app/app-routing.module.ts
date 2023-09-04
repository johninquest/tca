import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './pages/customers/customer-list/customer-list.component';
import { CustomerFormComponent } from './pages/customers/customer-form/customer-form.component';
import { CustomerDetailsComponent } from './pages/customers/customer-details/customer-details.component';
import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { DeviceInfoComponent } from './pages/device-info/device-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/default', pathMatch: 'full' },
  {
    path: 'customer-list',
    component: CustomerListComponent,
  },
  {
    path: 'customer-form',
    component: CustomerFormComponent,
  },
  {
    path: 'customer-details',
    component: CustomerDetailsComponent,
  },
  {
    path: 'default',
    component: DefaultComponent,
  },
  {
    path: 'device',
    component: DeviceInfoComponent,
    title: 'Device information',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: '**',
    component: DefaultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
