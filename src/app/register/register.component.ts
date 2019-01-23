import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "../auth.service";
import { ApiService } from "../api.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform: FormGroup;
  user = {};
  constructor(private authService: AuthService, private apiService: ApiService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', Validators.required)
    });
  }

  addUser(user) {
    this.apiService.register(user).subscribe((data: any) => {
      console.log(data)
      this.toastr.info(data.message, 'Info!')
    });
    // this.authService.addUser(user);

    // console.log(user)
    // let users = []
    // if (localStorage.getItem('users')) {
    //   users = JSON.parse(localStorage.getItem('users'));
    //   var exist = users.find((element) => element.email = user.email);
    //   if (exist) {
    //     users.push(user.value);
    //     localStorage.setItem('users', JSON.stringify(users));
    //   }
    //   else {
    //     console.log('email exist');
    //   }
    // }
    // else {
    //   users.push(user.value);
    //   localStorage.setItem('users', JSON.stringify(users));
    // }

  }

}
