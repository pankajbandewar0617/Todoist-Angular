import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { ProjectService } from './service/projects.service';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './service/task.service';
import { MaterialModule } from './material/material.module';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { DialogBoxTaskComponent } from './dialog-box-task/dialog-box-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ProjectComponent,
    TaskComponent,
    DialogBoxComponent,
    DialogBoxTaskComponent,
  ],
  entryComponents: [DialogBoxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [ProjectService, TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
