import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Suresh-Gobi';
  showPreloader: boolean = true;

  ngOnInit() {
    // Simulate a minimum of 3 seconds loading time
    setTimeout(() => {
      this.showPreloader = false;
    }, 2000);
  }
}
