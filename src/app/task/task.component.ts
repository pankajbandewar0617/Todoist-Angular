import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  @Input() taskData: any;
  @Input() projectId: any;
  @Input() project: string;
  showTask: boolean;

  ngOnInit(): void {
    this.showTask = false;
  }

  deleteTask(id: number) {
    this.taskData = this.taskData.filter((task) => task.id !== id);
    this.taskService.deleteTask(id).subscribe();
  }
  showAddTask() {
    this.showTask = !this.showTask;
  }

  addTask(title: string, id: number) {
    var data = new Task();
    data.project_id = id;
    data.content = title;
    if (title.length > 0) {
      this.taskService.addTask(data).subscribe((data) => {
        this.taskData.push(data);
      });
      this.showTask = !this.showTask;
    }
  }
}
