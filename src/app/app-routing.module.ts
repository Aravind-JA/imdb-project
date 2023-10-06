import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultComponent } from './MyComponents/search-result/search-result.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { ContentComponent } from './MyComponents/content/content.component';
import { WatchListComponent } from './MyComponents/watch-list/watch-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchResultComponent },
  { path: 'title/:id', component: ContentComponent },
  { path: 'watch-list', component: WatchListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
