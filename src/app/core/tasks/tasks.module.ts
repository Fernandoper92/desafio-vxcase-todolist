import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './components/list/list.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskService } from './services/task.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TasksRoutingModule
  ],
  declarations: [
    ListComponent,
  ],
  exports: [
  ],
  providers: [TaskService]
})
export class TasksModule { }
