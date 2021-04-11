import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges{
  @Input() dataInput;
  waktu = 0;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges terpanggil', changes);
    console.log(this.waktu++);
  }

  ngOnInit(): void {
  }

}
