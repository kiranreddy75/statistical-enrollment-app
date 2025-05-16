import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fep-enrollment-reports',
  standalone: false,
  templateUrl: './fep-enrollment-reports.component.html',
  styleUrl: './fep-enrollment-reports.component.scss'
})

export class FepEnrollmentReportsComponent implements OnInit {

  selectedProgramType: string = 'FEHB';
  planType: any[] = [
    { name: '010/510 - Birmingham - AL', code: '010' },
    { name: '020/520 - Montgomery - AL', code: '020' },
    { name: '030/530 - Mobile - AL', code: '030' },
    { name: '040/540 - Huntsville - AL', code: '040' },
    { name: '050/550 - Little Rock - AR', code: '050' },
    { name: '060/560 - Fort Smith - AR', code: '060' },
    { name: '070/570 - Jonesboro - AR', code: '070' },
    { name: '080/580 - Pine Bluff - AR', code: '080' },
    { name: '090/590 - Los Angeles - CA', code: '090' },
    { name: '100/600 - San Francisco - CA', code: '100' },
    { name: '110/610 - San Diego - CA', code: '110' },
    { name: '120/620 - Sacramento - CA', code: '120' }
  ];
  selectedPlanType =  { name: '010/510 - Birmingham - AL', code: '010' };
  reportsTypes: any[] = [
    { name: 'Report 20', code: 'report20' },
    { name: 'Report 21', code: 'report21' },
    { name: 'Report 22', code: 'report22' },
    { name: 'Report 23', code: 'report23' },
    { name: 'Report 24', code: 'report24' },
    { name: 'Report 25', code: 'report25' }
  ];
  selectedReportType = '';

  constructor() { }

  ngOnInit() { }
}
