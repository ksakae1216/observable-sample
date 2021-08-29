import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  template: `
    <p>
      # from-event click time -> {{clickTime}}
    </p>
  `,
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {

  clickTime!: number;

  source = fromEvent(document, 'click');

  constructor() { }

  ngOnInit(): void {
    this.source.subscribe((event) => this.clickTime = event.timeStamp);
  }

}
