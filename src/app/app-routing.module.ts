import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : '', loadChildren: () => import('./search/search.module').then(m => m.SearchModule), component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
