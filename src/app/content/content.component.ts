import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../service/projects.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input() public parentData: boolean;
  projects: any;
  data: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe((data) => {
      this.projects = data;
      let filterData = data.filter((project: any) => {
        return !project.inbox_project;
      });
      this.data = filterData;
    });
  }

  gotoTask(id: number, name: string) {
    this.router.navigate([`projects/${id}`, { title: name }], {
      relativeTo: this.route,
    });
  }
}
