import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }
  private apiKey = 'c625c602f1db4a708aea2f206830d91c';
  private getHeaderOptions(): {} {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return { headers };
  }
  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>('https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=' + this.apiKey, this.getHeaderOptions());

  }
}
