import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { DeviceInfoComponent } from './pages/device-info/device-info.component';
import { NetworthComponent } from './pages/networth/networth.component';
import { AuthComponent } from './pages/auth/auth.component';
import { UserComponent } from './pages/user/user.component';
import { InfoComponent } from './pages/info/info.component';
import { IncomeTaxComponent } from './pages/income-tax/income-tax.component';
import { ValueAddedTaxComponent } from './pages/value-added-tax/value-added-tax.component';
import { ChurchTaxComponent } from './pages/church-tax/church-tax.component';

const routes: Routes = [
  { path: '', redirectTo: '/default', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    title: 'Auth',
  },
  {
    path: 'default',
    component: DefaultComponent,
    title: 'Default page',
  },
  {
    path: 'device',
    component: DeviceInfoComponent,
    title: 'Device information',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'SteuerBro: Dein Steuerkumpel',
  },
  {
    path: 'rechner/einkommensteuer',
    component: IncomeTaxComponent,
    title: 'Rechner | Einkommensteuer',
  },
  {
    path: 'rechner/mehrwertsteuer',
    component: ValueAddedTaxComponent,
    title: 'Rechner | Mehrwertsteuer',
  },
  {
    path: 'rechner/kirchensteuer',
    component: ChurchTaxComponent,
    title: 'Rechner | Kirchensteuer',
  },
  {
    path: 'info',
    component: InfoComponent,
    title: 'Informationen',
  },
  {
    path: 'rechner',
    component: NetworthComponent,
    title: 'Rechner',
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
