import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppServiceService } from '../../shared/services/app-service.service';

@Component({
    selector: 'app-header',
    standalone: false,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
    app_title = 'FEP Enrollment & Statistical Enrollment Allocation';
    loggedInUser = 'UserFN, UserLN';
    items: MenuItem[] | undefined;

    constructor(private router: Router, private appService: AppServiceService) { }

    ngOnInit() {
        this.createMenuItems();
    }

    private createMenuItems() {
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
                },
                items: [
                    {
                        label: 'User Maintainance',
                        command: () => {
                            this.router.navigate(['/system-admin']);
                        }
                    },
                    {
                        label: 'Messages',
                        command: () => {
                            this.router.navigate(['/system-admin']);
                        }
                    },
                    {
                        label: 'Create files for CA (Plans 041 and 542)',
                        command: () => {
                            this.router.navigate(['/system-admin']);
                        }
                    },
                    {
                        label: 'Lipload FER Enrollment Data',
                        command: () => {
                            this.router.navigate(['/system-admin']);
                        }
                    }
                ]
            },
            {
                label: 'Reports',
                icon: 'pi pi-receipt',
                command: () => {
                    this.router.navigate(['/reports']);
                },
                items: [
                    {
                        label: 'FEP Enrollment',
                        command: () => {
                            this.router.navigate(['/reports']);
                        }
                    },
                    {
                        label: 'Monthly Report by Contract',
                        command: () => {
                            this.router.navigate(['/reports']);
                        }
                    },
                    {
                        label: 'Monthly Report by Member',
                        command: () => {
                            this.router.navigate(['/reports']);
                        }
                    },
                    {
                        label: 'YTD Report',
                        command: () => {
                            this.router.navigate(['/reports']);
                        }
                    }
                ]
            }
        ];
    }

    logout() {
        console.log('User logged out');
    }
}
