import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
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
}
