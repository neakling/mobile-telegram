import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secnpage',
  templateUrl: './secnpage.page.html',
  styleUrls: ['./secnpage.page.scss'],
})
export class SecnpagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  switchTheme(event) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }
}
