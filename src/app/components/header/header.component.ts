import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
    app_title = 'FEP Enrollment & Statistical Enrollment Allocation';
    loggedInUser = 'Venkat, Burri';
    items: MenuItem[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/home']);
                }
            },
            {
                label: 'System Admin',
                icon: 'pi pi-user',
                command: () => {
                    this.router.navigate(['/system-admin']);
                }
            },
            {
                label: 'Reports',
                icon: 'pi pi-receipt',
                command: () => {
                    this.router.navigate(['/reports']);
                }
            }
        ];
    }

    logout() {
    console.log('User logged out');
  }
}
