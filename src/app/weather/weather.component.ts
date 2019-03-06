import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { log } from 'util';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  location: any;
  currentLog: any;
  currentLat: any;
  currentWeather: any;
  temperature: number;
  currentLocation: string;
  tempInF: number;
  tempInC: number;
  showConvert: boolean;
  weatherType: any;
  weatherDescription: any;
  isDay: boolean;
  date: any;
  currentTime: any;


  constructor(private weatherservice: WeatherService) {
    this.currentTime = new Date().getHours();
    setInterval( () => {
      this.date = Date.now();
    }, 1 );

    if (this.currentTime < 19 && this.currentTime > 7) {
      this.isDay  = true;
    } else {
      this.isDay = false;
    }
  }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location = position;
        this.currentLat = this.location.coords.latitude;
        this.currentLog = this.location.coords.longitude;
        this.weather(this.currentLat, this.currentLog);
      });
    }
  }
  weather(val1, val2){
    this.weatherservice.getWeather(this.currentLat, this.currentLog)
      .subscribe((res) => {
        this.currentWeather = res;
        this.currentLocation = this.currentWeather.name;
        this.temperature = this.currentWeather.main.temp;
        this.weatherType = this.currentWeather.weather[0].main;
        this.weatherDescription = this.currentWeather.weather[0].description;
        this.temperature  = Math.floor(9 / 5 * (this.temperature - 273) + 32);
        this.tempInC = Math.floor((this.temperature - 32) * 5 / 9);
        this.tempInF = Math.floor((this.tempInC) * 9 / 5 + 32);
      });
  }


  convert() {
    this.showConvert = !this.showConvert;
  }
}
