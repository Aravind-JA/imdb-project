import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchResultComponent } from './MyComponents/search-result/search-result.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { ContentComponent } from './MyComponents/content/content.component';
import { SideContentComponent } from './MyComponents/side-content/side-content.component';
import { CircularProgressComponent } from './MyComponents/circular-progress/circular-progress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WatchListComponent } from './MyComponents/watch-list/watch-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultComponent,
    HomeComponent,
    ContentComponent,
    SideContentComponent,
    CircularProgressComponent,
    WatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
