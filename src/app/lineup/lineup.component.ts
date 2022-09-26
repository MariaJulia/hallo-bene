import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {

  public lineup: string[] = ["Powerwolf", "Sabaton", "Feuerschwanz"]
  constructor() { }

  ngOnInit(): void {
  }

}
