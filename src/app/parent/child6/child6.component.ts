import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.css']
})
export class Child6Component implements OnInit, OnDestroy {
  destroy = true;
  waktu = 0;
  contohDestroy;
  constructor(
    private router: Router
  ) { }

  ngOnDestroy(): void {
    console.log('Bye bye');
    clearInterval(this.contohDestroy);
  }

  ngOnInit(): void {
    this.contohDestroy = setInterval(() => {
      console.log(this.waktu++);
    }, 1000);
  }

  // tslint:disable-next-line:typedef
  changeRoute() {
    this.destroy = false;
    this.router.navigateByUrl('child');
  }

}
