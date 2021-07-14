import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskService } from './shared/task.service';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ],
  providers: [TaskService]
})
export class TaskModule { }
