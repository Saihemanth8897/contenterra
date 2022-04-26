import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  getThereditList(){
    return this.http.get('https://www.reddit.com/r/Angular2.json')
  }
}
