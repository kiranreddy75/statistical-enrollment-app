import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  user_plans: any[] = [];
  user_messages : any[] = [
    'You have 1 new message',
    'You have 2 new messages',
    'You have 3 new messages',
  ];

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
