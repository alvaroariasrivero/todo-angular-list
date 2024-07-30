import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private localSotorageKey = 'todoList';

  getTasks():string[] {
    return JSON.parse(localStorage.getItem(this.localSotorageKey) as string) || [];
  }

  addTask(task: string){
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(this.localSotorageKey, JSON.stringify(tasks));
  }

  deleteTask(index: number){
    const tasks = this.getTasks();
    tasks.splice(index, 1);
    localStorage.setItem(this.localSotorageKey, JSON.stringify(tasks));
  }

}
