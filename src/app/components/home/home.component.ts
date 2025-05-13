import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  user_plans: any[] = [];
  user_messages : any[] = [];

  constructor() { }

  ngOnInit() {
    this.user_plans = [
    {
      plan_name: '999FEP All Plans',
      plan_security_level: 'System Administrator',
      user_status: 'Active',
      app_name: 'FEP Enroliment & Statistical Enrollment Allocation',
      login_status: 'Current Login',
    }
  ];
}
}
