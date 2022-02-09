import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  @Input() //Ta zmienna otrzyma dane zewnątrz z podrzędnego komponentu
  public weatherData: any;

  constructor(
  ) { }


  ngOnInit(): void {
  }
}
