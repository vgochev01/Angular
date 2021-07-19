import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators'

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit, OnDestroy {

  timeStreamSubscription!: Subscription;
  timeValue!: Date;
  time$ = interval(1000).pipe(
    startWith(''),
    map((): Date => new Date())
  );


  constructor() { }

  ngOnInit(): void {
    this.timeStreamSubscription = this.time$.subscribe(timeValue => this.timeValue = timeValue);
  }

  ngOnDestroy(): void {
    this.timeStreamSubscription.unsubscribe();
  }

}
