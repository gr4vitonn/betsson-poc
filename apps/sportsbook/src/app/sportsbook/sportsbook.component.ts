import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myorg-sportsbook',
  templateUrl: './sportsbook.component.html',
  styleUrls: ['./sportsbook.component.scss']
})
export class SportsbookComponent implements OnInit {

  constructor() {
    console.log('sportsbook app component');
  }

  ngOnInit(): void {
  }

}
