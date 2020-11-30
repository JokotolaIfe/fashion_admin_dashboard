import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  public term_text: string;
  public terms: any;
  constructor(
  ) { }

  ngOnInit() {
  }

}