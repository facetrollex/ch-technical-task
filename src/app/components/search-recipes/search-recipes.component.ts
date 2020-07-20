import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

const ENDPOINT = 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.scss']
})
export class SearchRecipesComponent implements OnInit {

  public ingredients = '';
  public name = '';
  public searchData: { title, href, ingredients, thumbnail }[] = [];
  public page = 1;

  constructor(private http: HttpClient, private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.retrieveState();
  }

  searchRecipes(fromStart = false): void {
    if (fromStart) {
      this.page = 1;
    }
    this.spinnerService.show('global');
    this.http.get(`${ENDPOINT}?i=${this.ingredients}&q=${this.name}&p=${this.page}`, {
      headers: {
        'X-Requested-With': '123',
      }
    })
    .toPromise()
    .then((data: { results }) => {
      this.searchData = data.results;
      this.saveState();
      this.spinnerService.hide('global');
    })
    .catch(() => alert('No More Results.'))
    .finally(() => this.spinnerService.hide('global'));
  }

  more(): void {
    this.page++;
    window.scrollTo(0, 0);
    this.searchRecipes();
  }

  less(): void {
    this.page--;
    this.searchRecipes();
  }

  private saveState(): void {
    localStorage.setItem('ingredients', this.ingredients);
    localStorage.setItem('name', this.name);
    localStorage.setItem('page', this.page.toString());
  }

  private retrieveState(): void {
    this.ingredients = localStorage.getItem('ingredients') || '';
    this.name = localStorage.getItem('name') || '';
    this.page = +localStorage.getItem('page') || 1;
    if (this.ingredients || this.name) {
      this.searchRecipes();
    }
  }
}
