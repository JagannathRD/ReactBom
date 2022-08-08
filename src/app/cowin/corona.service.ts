import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http:HttpClient) { }

  getStates(){
    return this.http.get('https://corona.lmao.ninja/v3/covid-19/countries')
  }
}
