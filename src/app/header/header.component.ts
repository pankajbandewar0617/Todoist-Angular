import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from '../service/task.service';
import { DialogBoxTaskComponent } from '../dialog-box-task/dialog-box-task.component';
import { Task } from '../task/task';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog, private taskService: TaskService) {}
  open: boolean;
  title: string;

  @Output() changed = new EventEmitter();

  ngOnInit(): void {
    this.open = false;
  }

  sendEvent() {
    this.open = !this.open;
    this.changed.emit(this.open);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxTaskComponent, {
      data: { title: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.addTask(result);
    });
  }

  addTask(title: string) {
    let data = new Task();
    data.content = title;
    if (title.length > 0) {
      this.taskService.addTask(data).subscribe();
    }
  }
}
