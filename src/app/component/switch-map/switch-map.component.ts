import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  template: `
    <p>
      # switchmap -> look console.log
    </p>
  `,
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  obs1$ = of(1).pipe(delay(1000));
  obs2$ = of(2);
  obs3$ = of(3);

  source = of(this.obs1$, this.obs2$, this.obs3$).pipe(
    switchMap((val) => val) // obs1$はキャンセルされる
  );

  constructor() { }

  ngOnInit(): void {
    this.source.subscribe(x => console.log(`# switchMap ${x}`));
  }

}
