import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  message: String;
  constructor(private authService: AuthService, private router: Router, private apiService: ApiService,
    private toastr: ToastrService) {
    this.formLogin = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    console.log(!this.authService.connectedUser)
    if (this.authService.isAuth()) {
      this.router.navigateByUrl('/toDoList')
    }
  }

  login(user) {
    this.apiService.login(user).subscribe((data: any) => {
      console.log(data)
      this.toastr.info(data.message, 'Info!')
      localStorage.setItem('connectedUser', JSON.stringify(data));
      this.router.navigateByUrl('/toDoList')
      this.authService.connectedUser = user;
    });
    // this.authService.login(user);

    // this.message = '';
    // console.log(user)
    // let users = []
    // if (localStorage.getItem('users')) {
    //   users = JSON.parse(localStorage.getItem('users'));
    //   var existEmail = users.find((element) => element.email == user.value.email);
    //   if (existEmail) {
    //     var pwdValid = users.find((element) => element.password == user.value.password);
    //     if (pwdValid) {
    //       console.log('connected')
    //       this.message = 'succesfully connected'
    //       this.toastr.success('succesfully connected', 'Success!')

    //     }
    //     else {
    //       this.message = 'your password is not valid'
    //       this.toastr.error('your password is not valid', 'Oops!')
    //       console.log('pwd not valid');
    //     }

    //   }
    //   else {
    //     console.log('email not valid');
    //     this.message = 'your email is not valid';
    //     this.toastr.error('your email is not valid', 'Oops!');
    //   }
    // }
    // else {
    //   console.log('users not found');
    //   this.toastr.error('users not found', 'Oops!');
    // }
  }

}
