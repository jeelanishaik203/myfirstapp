import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  
  constructor() { }
  adduser(form)
  {
  console.log(form.value);
  }
  ngOnInit(): void {
  }

}
