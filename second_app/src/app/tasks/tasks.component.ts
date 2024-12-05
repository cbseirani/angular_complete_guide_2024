import { Component, Input, inject } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name?: string;
  isAddingTask = false;

  private tasksService = inject(TasksService)

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask(id: string) {
    console.log('user id adding task:' + id);
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
