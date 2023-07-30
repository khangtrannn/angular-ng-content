import { Component } from "@angular/core";

let _counter = 1;

@Component({
  selector: 'app-counter',
  template: `counter {{_counter}}`,
  standalone: true,
})
export class CounterComponent {
  _counter = _counter++;
}