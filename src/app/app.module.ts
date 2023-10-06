import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModules } from './material.modules';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { DefaultComponent } from './pages/default/default.component';
import { DeviceInfoComponent } from './pages/device-info/device-info.component';
import { NetworthComponent } from './pages/networth/networth.component';
import { CreateComponent } from './pages/create/create.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AuthComponent } from './pages/auth/auth.component';
import { AssetListComponent } from './pages/assets/asset-list/asset-list.component';
import { AssetUpdateComponent } from './pages/assets/asset-update/asset-update.component';
import { AssetCreateComponent } from './pages/assets/asset-create/asset-create.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    DefaultComponent,
    DeviceInfoComponent,
    NetworthComponent,
    CreateComponent,
    AuthComponent,
    AssetListComponent,
    AssetUpdateComponent,
    AssetCreateComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModules,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
