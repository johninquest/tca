import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModules } from './material.modules';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomerListComponent } from './pages/customers/customer-list/customer-list.component';
import { CustomerFormComponent } from './pages/customers/customer-form/customer-form.component';
import { CustomerDetailsComponent } from './pages/customers/customer-details/customer-details.component';
import { UserDetailsComponent } from './pages/user/user-details/user-details.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    CustomerListComponent,
    CustomerFormComponent,
    CustomerDetailsComponent,
    UserDetailsComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MaterialModules, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
