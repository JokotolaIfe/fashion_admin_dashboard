import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  public loading: boolean = false;
  public uploadFlag: any;

  public image: string;
  public link: string;

  public uploadPercent: any;
  public families: any;

  constructor(
  ) { }

  ngOnInit(): void {
    
  }


}
