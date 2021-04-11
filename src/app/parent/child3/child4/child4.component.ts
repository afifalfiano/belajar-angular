import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Child5Component } from './child5/child5.component';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements AfterContentInit {
  @ContentChild('child4Header', { read: ElementRef }) child4: ElementRef;
  @ContentChild(Child5Component, { read: ElementRef }) child5: ElementRef;
  title = 'child4';

  constructor(private renderer: Renderer2) { }
  randomRGB(): string {
    return `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;
  }

  // tslint:disable-next-line:typedef
  onChangeColor() {
    this.title = 'child5';
  }


  // tslint:disable-next-line:typedef
  ngAfterContentInit() {
    // this.renderer.setStyle(this.child4.nativeElement, 'background-color', 'yellow');
    // this.renderer.setStyle(this.child5.nativeElement.children[0], 'background-color', 'pink');

    this.renderer.setStyle(this.child4.nativeElement, 'background-color', this.randomRGB());
    this.renderer.setStyle(this.child5.nativeElement.children[0], 'background-color', this.randomRGB());
    setTimeout(
      () => {
        if (this.title === 'child5') {
          console.log('ngAfterContentInit terpanggil lagi');
          this.renderer.setStyle(this.child5.nativeElement.children[0], 'background-color', this.randomRGB());
          }
      }, 3000
    );
  }

}
