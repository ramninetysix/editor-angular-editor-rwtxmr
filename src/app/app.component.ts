import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  name = 'Angular';
  boolvar = true;

  ngOnInit() {
    console.log('Parent Inherited...');
  }
  ngOnDestroy() {
    console.log('Parent Finished.....');
  }
  ngOnChanges() {
    console.log('Parent changes');
  }
  ngDoCheck() {
    console.log('This is parent DOcheck');
  }
  ngAfterViewInit() {
    console.log('This is parent ngAfterViewInit');
    this.name = 'Ramkumar';
  }
}
