import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit, AfterViewInit {
  @ViewChild('afterView', {read: ElementRef}) afterView: ElementRef;
  constructor(
    private renderer: Renderer2
  ) { }
  ngAfterViewInit(): void {
    console.log(this.afterView);
    this.renderer.setStyle(this.afterView.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.afterView.nativeElement, 'background-color', 'black');
  }

  ngOnInit(): void {
  }

}
