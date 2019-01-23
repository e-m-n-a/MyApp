import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
connectedUser ;
toDoList = [];

  constructor(private toastr: ToastrService, private router : Router) { 
      this.connectedUser =  JSON.parse(localStorage.getItem('connectedUser'));
    }

  login(user) {
    let message = '';
    console.log(user)
    let users = []
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
      var existEmail = users.find((element) => element.email == user.value.email);
      if (existEmail) {
        var pwdValid = users.find((element) => element.password == user.value.password);
        if (pwdValid) {
          this.connectedUser = pwdValid;
          localStorage.setItem('connectedUser', JSON.stringify(this.connectedUser));
          console.log('connected')
          message = 'succesfully connected'
          this.toastr.success('succesfully connected', 'Success!');
          this.router.navigateByUrl('/toDoList');

        }
        else {
          message = 'your password is not valid'
          this.toastr.error('your password is not valid', 'Oops!')
          console.log('pwd not valid');
        }

      }
      else {
        console.log('email not valid');
        message = 'your email is not valid';
        this.toastr.error('your email is not valid', 'Oops!');
      }
    }
    else {
      console.log('users not found');
      this.toastr.error('users not found', 'Oops!');
    }
  }
  addUser(user) {
    console.log(user)
    let users = []
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
      var exist = users.find((element) => element.email = user.email);
      if (exist) {
        users.push(user.value);
        localStorage.setItem('users', JSON.stringify(users));
      }
      else {
        console.log('email exist');
      }
    }
    else {
      users.push(user.value);
      localStorage.setItem('users', JSON.stringify(users));
    }

  }
  
  addToDoList(element){
   
    let item = {
      title: element.task,
      date : Date.now(),
      done : false
    };
    this.toDoList.push(item);

    let users = []
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
      users.forEach(element => {
        element.toDoList = this.toDoList;
      });
      
        localStorage.setItem('users', JSON.stringify(users));
     
    }
    return this.toDoList;

  }

  isAuth(){
      return (JSON.parse(localStorage.getItem('connectedUser')) ? true : false);
  }

  editToDo(element, indx) {
    let users = JSON.parse(localStorage.getItem('users'));
    console.log(users);
    const user = users.find((element) => element.email === this.connectedUser.email);
    user.toDoList[indx] = element;
    var i = users.indexOf(334);
    if (i !== -1) {
      users[i] = user;
    }
    localStorage.setItem('users', JSON.stringify(users));

  }

}
