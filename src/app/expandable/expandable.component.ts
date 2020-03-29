import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements OnInit {

  @Input('expanded') expanded;
  @Input('expandHeight') expandHeight;

  currentHeight : number = 0;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.expanded);
    console.log(this.expandHeight);
  }

}
