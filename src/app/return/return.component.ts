import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {
  public return_text: string;
  public returns: any;
  constructor(
  ) { }

  ngOnInit(): void {
  }

  

}
