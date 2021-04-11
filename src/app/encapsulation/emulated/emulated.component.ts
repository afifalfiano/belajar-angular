import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulated',
  templateUrl: './emulated.component.html',
  styleUrls: ['./emulated.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EmulatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
