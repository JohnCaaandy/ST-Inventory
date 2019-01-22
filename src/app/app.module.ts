import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from 'src/shared/convert-to-spaces.pipe';
import { StarComponent } from 'src/shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './Home/welcome.component';
import { RouterModule } from '@angular/router';
import { AboutStComponent } from './about/about-st.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    AboutStComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent },
<<<<<<< HEAD
      {path: 'productdetail', component: ProductDetailComponent },
=======
      {path: 'products/:id', component: ProductDetailComponent },
>>>>>>> 1e628ebbcf0564cb5fa67c76ae7a5a17fa410d91
      {path: 'welcome', component: WelcomeComponent },
      {path: 'about', component: AboutStComponent },
      {path: '', redirectTo:'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
  
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
