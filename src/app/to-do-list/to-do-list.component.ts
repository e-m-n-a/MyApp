import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "../auth.service";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  formTodoList: FormGroup;
  toDoList = [];
  connectedUser
  constructor(private authService: AuthService, private apiService: ApiService) {
    this.formTodoList = new FormGroup({
      task: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    if (localStorage.getItem('connectedUser')) {
      this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
      this.apiService.getUser(this.connectedUser._id).subscribe((data:any) => {
        if (data.todos)
          this.toDoList = data.todos;
      })
    }
  }


  addToDoList(element) {
    let item = {
      title: element.task,
      date: Date.now(),
      done: false
    };
    this.toDoList.push(item);
    this.connectedUser['todos'] = this.toDoList;
    this.apiService.updateUser(this.connectedUser).subscribe((data: any) => {
      console.log(data)
    });
    // this.toDoList = this.authService.addToDoList(element);

    // let item = {
    //   title: element.task,
    //   date : Date.now(),
    //   done : false
    // };
    // this.toDoList.push(item);

    // let users = []
    // if (localStorage.getItem('users')) {
    //   users = JSON.parse(localStorage.getItem('users'));
    //   users.forEach(element => {
    //     element.toDoList = this.toDoList;
    //   });

    //     localStorage.setItem('users', JSON.stringify(users));

    // }

  }

}
