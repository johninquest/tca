import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { DeviceInfoComponent } from './pages/device-info/device-info.component';
import { NetworthComponent } from './pages/networth/networth.component';
import { CreateComponent } from './pages/create/create.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AssetCreateComponent } from './pages/assets/asset-create/asset-create.component';
import { AssetListComponent } from './pages/assets/asset-list/asset-list.component';
import { UserComponent } from './pages/user/user.component';
import { LiabilityListComponent } from './pages/liabilities/liability-list/liability-list.component';
import { LiabilityCreateComponent } from './pages/liabilities/liability-create/liability-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/default', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    title: 'Auth',
  },
  {
    path: 'asset/list',
    component: AssetListComponent,
    title: 'List of assets',
  },
  {
    path: 'asset/new',
    component: AssetCreateComponent,
    title: 'New asset',
  }, 
  {
    path: 'liability/list',
    component: LiabilityListComponent,
    title: 'List of liabilities',
  },
  {
    path: 'liability/new',
    component: LiabilityCreateComponent,
    title: 'New liability',
  },
  {
    path: 'new',
    component: CreateComponent,
    title: 'New asset / liability',
  },
  {
    path: 'default',
    component: DefaultComponent,
    title: 'Default page',
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
    path: 'numbers',
    component: ProductsComponent,
    title: 'Numbers we love'
  },
  {
    path: 'user',
    component: UserComponent,
    title: 'User information'
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
export class AppRoutingModule { }
