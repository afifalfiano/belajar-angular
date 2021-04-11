import { ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnInit, DoCheck {
  waktu = 0;
  dataLama = 'Data lama';
  data: string[] = ['Data awal'];

  constructor(private changeDetector: ChangeDetectorRef) {
    setTimeout(
      () => {
        this.dataLama = 'Data diperbarui';
        this.data.push('Data baru masuk');
      }, 3000
    );

    setTimeout(() => {
      this.data.push('Data baru masuk lagi');
    }, 5000);
   }
  ngDoCheck(): void {
    console.log('ngDoCheck terpanggil');
    console.log(this.waktu++);

    if (this.data[this.data.length - 1] !== this.dataLama) {
      this.changeDetector.detectChanges();
    }
  }

  ngOnInit(): void {
  }

}
