import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {
constructor(){
setInterval(()=>{this.imageurl="../assets/valarmor.jpg"
},(3000))
}
 imageurl:string="../assets/valarmor.jpg"
  wish(){
    this.imageurl="../assets/valardoh.jpg"
  }

}
