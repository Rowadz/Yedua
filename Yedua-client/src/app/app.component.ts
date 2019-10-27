import { Component } from '@angular/core';
// import { load } from 'cheerio';

@Component({
  selector: 'yedua-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Yedua';

  constructor() {}

  test(): void {
    fetch(`https://crossorigin.me/https://github.com/gnuns/allOrigins`)
      .then((d: Response) => {
        console.log(d.type);
        console.log(d);
        return d;
      })
      .then((d: Response) => d.text())
      .then(console.log);
  }
}
