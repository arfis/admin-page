import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigationItems = ['novinky', 'analyza', 'blog', 'kalendar'];
  constructor() { }

  ngOnInit() {
  }

}
