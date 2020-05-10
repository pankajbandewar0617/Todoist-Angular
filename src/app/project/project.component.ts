import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}
  public id = 0;
  title: string;
  tasks: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
      this.title = params.get('title');
      this.taskService.getTasks(this.id).subscribe((data) => {
        this.tasks = data;
      });
    });
  }
}
