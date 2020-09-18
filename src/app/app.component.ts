import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rwe';
  itemsPerSlide = 1;
  singleSlideOffset = true;
  noWrap = true;

  private innerWidth: number;
  private mobileBreakpoint = 480;

  slides = [
    {
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg',
    },
    {
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg',
    },
    {
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg',
    },
    {
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg',
    },
    {
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg',
    },
    {
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg',
    },
    {
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg',
    },
    {
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg',
    },
    {
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg',
    },
    {
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg',
    },
  ];

  ngOnInit() {
    this.adjustsItemsPerSlide();
  }
  private adjustsItemsPerSlide() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < this.mobileBreakpoint) {
      this.itemsPerSlide = 1;
    } else {
      this.itemsPerSlide = 3;
    }
  }
}
