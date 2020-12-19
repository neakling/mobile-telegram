import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public listanime = [{
    name: 'fsdfsd',
    img: 'https://yummyanime.club/img/posters/1581084177.jpg'
  }, {
    name: 'семь смертных грехов',
    img: './img/photo2.png'
  }, {
    name: 'тарахтайка',
    img: './img/photo3.png',
    fd: 'fdsf'
  }];

  constructor() { }


}
