import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-eg',
  templateUrl: './directive-eg.component.html',
  styleUrls: ['./directive-eg.component.css']
})
export class DirectiveEgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  index=0;
  kingdoms:string[]=['Starks','Targareyns','Lannister','Martell','Greyjoy','Tyrell','Baratheon'];
  status=true;
  hidekingdoms()
  {
    this.status=!this.status;
  }
  stylestatus="jumbotron stylered";
  dynamiccss()
  {
    if(this.stylestatus!="jumbotron stylered"){
      this.stylestatus="jumbotron stylered"
    }
    else{
      this.stylestatus="jumbotron styleyellow"
    }
  }
}
