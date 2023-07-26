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

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'articles',component: ArticlesComponent},
  {path:'store', component: StoreComponent},
  {path:'prodSingle', component: ProdSingleComponent},
  {path:'articles/articleInfo', component: ArticleInfoComponent},
  {path:'styleGuide', component: StyleGuideComponent},
  {path:'err', component: ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
