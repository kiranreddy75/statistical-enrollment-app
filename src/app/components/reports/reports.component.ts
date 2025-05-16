import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  standalone: false,
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {
  constructor(private readonly router: Router) {}

    ngOnInit(): void {
        // Initialization logic can go here
    }

    navigateToFeature(feature: string) {
        switch (feature) {
            case 'FEP Enrollment':
                this.router.navigate(['/fep-enrollment-reports']);
                break;
            // Add more cases for other features as needed
            default:
                console.error('Feature not recognized');
        }
    }

}
