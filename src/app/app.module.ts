import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { G1Component } from './home/g1/g1.component';
import { G2Component } from './home/g2/g2.component';
import { G3Component } from './home/g3/g3.component';
import { G4Component } from './home/g4/g4.component';
import { G5Component } from './home/g5/g5.component';
import { G6Component } from './home/g6/g6.component';
import { G7Component } from './home/g7/g7.component';
import { G8Component } from './home/g8/g8.component';
import { G9Component } from './home/g9/g9.component';
import { G10Component } from './home/g10/g10.component';
import { ArticlesComponent } from './articles/articles.component';
import { StoreComponent } from './store/store.component';
import { ProdSingleComponent } from './prod-single/prod-single.component';
import { ArticleInfoComponent } from './articles/article-info/article-info.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { ErrComponent } from './err/err.component';
import { PassProtectedComponent } from './pass-protected/pass-protected.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { SnackComponent } from './snack/snack.component';
import { PaymentComponent } from './payment/payment.component';
import { CartServiceService } from './cart-service.service';
import { CartReviewComponent } from './payment/cart-review/cart-review.component';
import { ShippingAddressComponent } from './payment/shipping-address/shipping-address.component';
import { CardComponent } from './payment/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    G1Component,
    G2Component,
    G3Component,
    G4Component,
    G5Component,
    G6Component,
    G7Component,
    G8Component,
    G9Component,
    G10Component,
    ArticlesComponent,
    StoreComponent,
    ProdSingleComponent,
    ArticleInfoComponent,
    StyleGuideComponent,
    ErrComponent,
    PassProtectedComponent,
    ChangelogComponent,
    ContactComponent,
    SnackComponent,
    PaymentComponent,
    CartComponent,
    CartReviewComponent,
    ShippingAddressComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    CommonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [CartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
