import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  @Input() //Ta zmienna otrzyma dane zewnątrz z podrzędnego komponentu
  public weatherData: any;
  @Input()
  public currentDate: any;

  @Output()
  refreshEvent = new EventEmitter();

  constructor(
  ) { }

  onRefresh(): void{
    this.refreshEvent.emit();
  }

  ngOnInit(): void {
  }
}
