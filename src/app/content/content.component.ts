import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../service/projects.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Project } from './project';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input() public parentData: boolean;
  projects: any;
  data: any;
  updateData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    public dialog: MatDialog
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

  openDialog(id?: number, name?: string): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: { title: name },
    });

    if (name) {
      dialogRef.afterClosed().subscribe((result) => {
        this.updateProject(id, result);
      });
    } else {
      dialogRef.afterClosed().subscribe((result) => {
        this.addProject(result);
      });
    }
  }

  addProject(name: string) {
    var project = new Project();
    if (name.length > 0) {
      project.name = name;
      this.projectService.createNewProject(project).subscribe((result) => {
        this.data.push(result);
      });
    }
  }

  updateProject(id: number, name: string) {
    var project = new Project();

    if (name.length > 0) {
      project.name = name;
      this.projectService.changeProject(id, project).subscribe();

      this.updateData = this.data.filter((project) => project.id === id);
      this.updateData[0].name = name;

      this.router.navigate([`projects/${id}`, { title: name }], {
        relativeTo: this.route,
      });
    }
  }

  deleteProject(id: number) {
    this.data = this.data.filter((project) => project.id !== id);
    this.projectService.deleteProject(id).subscribe();
    this.router.navigate([`projects/${id}`, { title: '' }], {
      relativeTo: this.route,
    });
  }
}
