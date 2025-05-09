import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  app_title = 'FEP Enrollment & Statistical Enrollment Allocation';
  
  constructor() {}

  ngOnInit(): void {
    // Initialize any data or services here
  }

}
