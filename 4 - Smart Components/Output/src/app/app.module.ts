import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {OpenWeatherService} from './open-weather.service';
import { WeatherDataContainerComponent } from './weather-data-container/weather-data-container.component';

@NgModule({
 declarations: [
 AppComponent,
 WeatherComponent,
 WeatherDataContainerComponent
 ],
 imports: [
 BrowserModule,
 ReactiveFormsModule,
 HttpClientModule
 ],
 providers: [
   OpenWeatherService,
 ],
 bootstrap: [AppComponent]
})
export class AppModule { }