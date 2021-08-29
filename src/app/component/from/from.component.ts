import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  template: `
    <p>
      # from -> look console.log
    </p>
  `,
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {

  nums = from(['A', 'B', 'C']);

  constructor() { }

  ngOnInit(): void {
    this.nums.subscribe((val) => console.log(`# from ${val}`));
  }

}
