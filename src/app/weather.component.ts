import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

import { AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {firebaseConfig} from './app.module';
import { WeatherService} from './weather.service';

import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './weather.component.html',
  styleUrls: ['./app.component.css']
})
export class WeatherComponent implements OnInit {
  city = "Loading";
  temp = "Loading";
  zip1;

  constructor(private dataService:WeatherService){}

  ngOnInit() {
    //console.log(this.dataService.getWeather())
    let url = 'http://api.openweathermap.org/data/2.5/weather?zip=65802' +
    //this.zipCode +
    '&appid=b86dc3179d853356b32565e7717caca5'+
    '&units=imperial';
    fetch(url)
    .then(function(response){
        return response.json();


    }).then(function(json){
        console.log(json);
        this.city = json.name;
        this.temp = json.main.temp;
    }.bind(this));
    }

 }
