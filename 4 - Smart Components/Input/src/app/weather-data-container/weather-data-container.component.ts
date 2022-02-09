import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from '../open-weather.service';
@Component({
  selector: 'app-weather-data-container',
  templateUrl: './weather-data-container.component.html',
  styleUrls: ['./weather-data-container.component.css']
})
export class WeatherDataContainerComponent implements OnInit {
  public firstCityWeatherData: any;
  public secondCityWeatherData: any;
  FIRST_CITY = 'Poznań';
  SECOND_CITY = 'Szczecin';
  constructor(
    private openWeatherService: OpenWeatherService
  ) { }


  checkWeather(): void {
    this.openWeatherService
      .getWeather(this.FIRST_CITY)
      .subscribe((data:any) => (this.firstCityWeatherData = data));
    this.openWeatherService
      .getWeather(this.SECOND_CITY)
      .subscribe((data:any) => (this.secondCityWeatherData = data));
  }
  ngOnInit(): void {
    this.checkWeather();
  }
}
