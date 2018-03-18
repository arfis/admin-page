import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'admin-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent implements OnInit {

  @Input() name;
  constructor() { }

  ngOnInit() {
  }

}
