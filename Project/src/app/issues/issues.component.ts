import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  department=['sprint 11.2','sprint 10','sprint 9.2','sprint 9.1'];
  member=['ajay','ajaysiva','bharath','bharani','dinesh','fero'];

  constructor() { }

  ngOnInit() {
  }

}
