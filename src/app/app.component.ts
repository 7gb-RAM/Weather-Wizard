import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService){

  }



  public weatherData?: WeatherData;
  public geoLocationData?: Geolocation;
  public cityName?: string="Wellington";
  public lat: string = "";
  public lon: string = "";

  ngOnInit(): void {
    this.getWeatherData('-41.276825','174.777969');
    this.cityName ="";
    debugger
    // this.getGeoLocation('hyderabad');
    
  }

  kelvinToCelsius(temp: any){
    let tempincelsius: any = temp - 273.15;
    return tempincelsius;
  }

  onSubmit(){
    this.getGeoLocation(this.cityName);
    // if(this.lat.length && this.lon.length){
      
      this.lat =""
      this.lon =""
      this.cityName="";
    // }


  }


  // ('-41.276825','174.777969')
  private getWeatherData(lat: string, long: string) {
    this.weatherService.getWeatherData(lat,long)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    })

  }

  private getGeoLocation(cityName: string){
    this.weatherService.getGeoLocation(cityName)
    .subscribe({
      next: (response) => { 
        debugger
        this.geoLocationData= response;
        this.lat = response[0] ? response[0].lat : "";
        this.lon = response[0] ? response[0].lon : "";
        console.log(response[0]);

        this.getWeatherData(this.lat, this.lon);
      }
    })
  }
  
}
