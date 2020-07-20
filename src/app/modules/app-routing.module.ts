import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadmeComponent } from '../components/readme/readme.component';
import { BasicCsComponent } from '../components/basic-cs/basic-cs.component';
import { SearchRecipesComponent } from '../components/search-recipes/search-recipes.component';

const routes: Routes = [
  { path: 'readme', component: ReadmeComponent },
  { path: 'basic-cs', component: BasicCsComponent },
  { path: 'search-recipes', component: SearchRecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
