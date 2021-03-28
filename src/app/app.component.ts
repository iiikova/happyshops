import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isBanner = false;
  isForm = false;
  isCall = false;

  closeBanner() {
    this.isBanner = false;
  }
  closeForm() {
    this.isForm = false;
  }
  showPop() {
    this.isBanner = true;
  }
  showForm() {
    this.isForm = true;
  }
  showCall() {
    this.isCall = true;
  }

  public ngOnInit(): void {
    // const showBanner = interval(10000);
    // showBanner.subscribe(() => {
    //   return this.showPop();
    // });
    // const showForm = interval(20000);
    // showForm.subscribe(() => {
    //   return this.showForm();
    // });
    // const showCall = interval(30000);
    // showCall.subscribe(() => {
    //   return this.showCall();
    // });
  }
}
