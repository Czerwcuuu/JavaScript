import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  constructor(
    private http: HttpClient
  ) { }
  API_KEY = 'ccd7d3931b9c3b669eaf45e6fc10cd77';
  getWeather(location:any): any {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?appid=${this.API_KEY}&units=metric&q=${location}`
    );
  }
}
