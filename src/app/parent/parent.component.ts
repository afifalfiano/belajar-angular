import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  dataParent = 'Parent';
  title = 'ngOnInit';
  dataDestroy;
  waktu = 0;
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit terpanggil', this);
    this.title = 'Inisialisasi Awal';
    setTimeout(() => {
      this.dataParent = 'Kiriman dari Parent';
    }, 5000);
  }

}
