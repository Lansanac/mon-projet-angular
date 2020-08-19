import { Component, OnInit, OnDestroy } from '@angular/core';
import { setTimeout } from 'timers';
import { AppareilService } from './services/appareil.service'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor() {}
  secondes: number;
  counterSubscrition: Subscription;
  ngOnInit(){
    const counter = Observable.interval(1000);
    this.counterSubscrition = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    );
  }
  ngOnDestroy(){
    this.counterSubscrition.unsubscribe();
  }
}
