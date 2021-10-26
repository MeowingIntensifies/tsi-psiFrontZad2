import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Cat} from "../model/cat";
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private readonly http: HttpClient) { }

  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>('http://localhost:8080/tables/cats');
  }
}
