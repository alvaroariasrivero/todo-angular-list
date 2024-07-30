import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  tasksList: string[] = [];
  newTask: string = '';

  private _tasksService = inject(TasksService);

  ngOnInit(): void {
      this.tasksList = this._tasksService.getTasks();
  }

  addNewTask() {
    this._tasksService.addTask(this.newTask);
    this.newTask = '';
    this.tasksList = this._tasksService.getTasks();
  }

  removeTask(index: number){
    this._tasksService.deleteTask(index);
    this.tasksList = this._tasksService.getTasks();
  }

}
