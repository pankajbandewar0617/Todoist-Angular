import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box-task',
  templateUrl: './dialog-box-task.component.html',
  styleUrls: ['./dialog-box-task.component.scss'],
})
export class DialogBoxTaskComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  // minDate: any;
  // maxDate: any;

  ngOnInit(): void {
    // this.minDate = new Date();
    // this.maxDate = new Date(2020, 11, 31);
  }
}
