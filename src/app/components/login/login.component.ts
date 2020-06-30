import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: any = {};
  constructor() { }

  ngOnInit() {
  }

  login(){
    console.table(this.credentials)
    
  }
}
