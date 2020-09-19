import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../common/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit{

  public registerFormGroup: FormGroup;
  public control : any;
  submitted = false;

  constructor(private router: Router, private authService: AuthService) { 
    
    this.registerFormGroup = new FormGroup({
      nomEt: new FormControl('', [Validators.minLength(5), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(5), Validators.required]),
      confmp: new FormControl('', [Validators.minLength(5), Validators.required]),
    })

    this.control= this.registerFormGroup.controls

  }

  ngOnInit()
  {
    
  }

  register(){

    this.submitted = true;
    if (this.registerFormGroup.valid) {
      this.authService.register(this.registerFormGroup.value).subscribe((responseBody)=>{
        this.router.navigate(['/dashboard']);
      }, (err)=>{
        console.log(err);
      })
    }
  }
}
