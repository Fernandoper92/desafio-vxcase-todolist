import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  
  tasks: any;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.listTasks();
  }

  listTasks() {
    this.taskService.getTasks().subscribe((data) => {
      console.log(data);
      this.tasks = data;
    },(error) => {console.log(error)})
  }

}
