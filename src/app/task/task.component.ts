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
  minDate: any;
  maxDate: any;

  ngOnInit(): void {
    this.showTask = false;
    this.minDate = new Date();
    this.maxDate = new Date(2020, 11, 31);
  }

  deleteTask(id: number) {
    this.taskData = this.taskData.filter((task) => task.id !== id);
    this.taskService.deleteTask(id).subscribe();
  }
  showAddTask() {
    this.showTask = !this.showTask;
  }

  addTask(title: string, id: number, date: string) {
    let data = new Task();
    data.project_id = id;
    data.content = title;
    let newdate = date.split('/');
    let year = newdate[2];
    let month = newdate[0];
    let day = newdate[1];
    month = month.length === 2 ? month : '0' + month;
    day = day.length === 2 ? day : '0' + day;
    let scheduleDate = year + '-' + month + '-' + day;
    data.due_date = scheduleDate;
    if (title.length > 0) {
      this.taskService.addTask(data).subscribe((data) => {
        this.taskData.push(data);
      });
      this.showTask = !this.showTask;
    }
  }
}
