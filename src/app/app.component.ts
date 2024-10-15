import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { NgxDatatableModule, ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxDatatableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'recipe-book';
  rows: any[] = [];

  constructor(public rService: RecipeService) {}
  ngOnInit() {
    this.rService.getRecipes().subscribe((j) => {
      console.log(j)
      this.rows = (j as any).results;
    });
  }

  customSearch(_page: number) {
    const info = {
      page: _page
    };
  }
}
