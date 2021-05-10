import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor()
  {
    setInterval(()=>{this.question="What do we say to Death?"},(3000))
  }
  question:string="What do we say to Death?"
  answer(){
    this.question="Not Today"
  }
  

}
