import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(lat : string, lon : string):Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      params: new HttpParams()
      .set('lat',lat)
      .set('lon',lon)
      .set('appid',environment.openWeatherMapTemperatureKey)
    })

  }

  getGeoLocation(cityName: string):Observable<Geolocation>{
    return this.http.get<Geolocation>(environment.geoLocationApiBaseUrl, {
      params: new HttpParams()
      .set('q',cityName)
      .set('limit','1')
      .set('appid',environment.openWeatherMapGeoLocationKey)

    })

  }
}
