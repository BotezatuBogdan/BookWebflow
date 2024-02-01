import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArticlesComponent } from './articles/articles.component';
import { StoreComponent } from './store/store.component';
import { ProdSingleComponent } from './prod-single/prod-single.component';
import { ArticleInfoComponent } from './articles/article-info/article-info.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { ErrComponent } from './err/err.component';
import { PassProtectedComponent } from './pass-protected/pass-protected.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentFailComponent } from './payment-fail/payment-fail.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'articles',component: ArticlesComponent},
  {path:'store', component: StoreComponent},
  {path:'prodSingle', component: ProdSingleComponent},
  {path:'articles/articleInfo', component: ArticleInfoComponent},
  {path:'styleGuide', component: StyleGuideComponent},
  {path:'err', component: ErrComponent},
  {path:'pass', component: PassProtectedComponent},
  {path:'changelog', component: ChangelogComponent},
  {path:'contact', component: ContactComponent},
  {path:'payment', component: PaymentComponent},
  {path:'paymentSuccess', component: PaymentSuccessComponent},
  {path:'paymentFail', component: PaymentFailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
