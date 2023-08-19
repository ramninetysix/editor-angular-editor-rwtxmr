import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterViewInit,
} from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!  </h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit
{
  @Input() name: string;

  ngOnInit() {
    console.log('Child Inherited...');
  }
  ngOnDestroy() {
    console.log('Child Finished.....');
  }
  ngOnChanges() {
    console.log('Child changes');
  }
  ngDoCheck() {
    console.log('This is Child DOcheck');
  }
  ngAfterViewInit() {
    console.log('This is Child ngAfterViewInit');
  }
}
