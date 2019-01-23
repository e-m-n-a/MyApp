import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  formEditTodo: FormGroup;
  index;
  task;
  connectedUser
  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService,
    private apiService: ApiService) {
    this.formEditTodo = new FormGroup({
      title: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      done: new FormControl('', Validators.required)

    });
  }

  ngOnInit() {
    this.index = this.activatedRoute.snapshot.params.task;
    console.log(this.index);
    // let users = JSON.parse(localStorage.getItem('users'));
    // console.log(users);
    // const user = users.find((element) => element.email === this.authService.connectedUser.email);

    // console.log(user);
    // this.task = user.toDoList[this.index];

    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    this.apiService.getUser(this.connectedUser._id).subscribe((data: any) => {

      console.log(data);
      this.task = data.todos[this.index];
      // this.task.date = new Date(this.task.date).toLocaleDateString()
      this.formEditTodo.setValue(this.task);
    });

    // this.task = this.connectedUser.todos[this.index];

    // this.index
  }

  editToDo(element) {
    this.authService.editToDo(element, this.index);

  }

}
