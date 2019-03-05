import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  

  constructor(private http : HttpClient)  { }

  getWeather(currentLat, currentLog) : Observable<any> {

    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLog}&appid=c588d79f4b84beadbd6a49d3c5365c13`)

   }
}
