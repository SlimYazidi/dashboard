import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit{

  constructor(private authService: AuthService) { }

  ngOnInit()
  {
    
  }

}
