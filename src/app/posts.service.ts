import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/');
  }
}
