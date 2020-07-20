import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './components/main/app.component';
import { ReadmeComponent } from './components/readme/readme.component';
import { BasicCsComponent } from './components/basic-cs/basic-cs.component';
import { SearchRecipesComponent } from './components/search-recipes/search-recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadmeComponent,
    BasicCsComponent,
    SearchRecipesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
