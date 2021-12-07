import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks:string[] = ['https://codepen.io/','https://dribbble.com/']

  constructor() { }

  ngOnInit() {
  }

}
