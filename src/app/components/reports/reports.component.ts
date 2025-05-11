import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: false,
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {
  constructor() {}

  selectedProgram: any = null;

    program_types: any[] = [
        { name: 'FEHB', key: 'fehb' },
        { name: 'PSHB', key: 'pshb' },
    ];

    ngOnInit(): void {
        this.selectedProgram = this.program_types[1];
    }
}
