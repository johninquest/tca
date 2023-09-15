import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { DeviceInfoComponent } from './pages/device-info/device-info.component';
import { NetworthComponent } from './pages/networth/networth.component';
import { CreateComponent } from './pages/create/create.component';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: '/default', pathMatch: 'full' }, 
  {
    path: 'auth',
    component: AuthComponent,
    title: 'Auth',
  },
  {
    path: 'create',
    component: CreateComponent,
    title: 'Create a new entry',
  },
  {
    path: 'default',
    component: DefaultComponent,
    title: 'Under construction',
  },
  {
    path: 'device-info',
    component: DeviceInfoComponent,
    title: 'Device information',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'NetWorth360 | What Can I Afford?',
  },
  {
    path: 'networth',
    component: NetworthComponent,
    title: 'Net worth',
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
