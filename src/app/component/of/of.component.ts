import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  template: `
    <p>
      # of -> look console.log
    </p>
  `,
})
export class ofComponent implements OnInit {

  nums = of<number>(1, 2, 3);

  ngOnInit(): void {
    this.nums.subscribe((val) => {
      console.log(`# of ${val}`)
    });
  }

}
