import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email:string ='';
  password: string ='';
  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onSubmit(e:any,p:any) {
     this.authService.login(e,p);
    }

}


