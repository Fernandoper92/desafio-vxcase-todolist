import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  tasks: any;
  form: FormGroup;

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.listTasks();
    this.formInit();
  }

  formInit() {
    this.form = this.formBuilder.group({
      titulo: [null],
      descricao: [null]
    });
  }

  listTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  setTask() {
    let task = this.form.value;
    this.taskService.postTask(task).subscribe(() => {
      this.tasks.push(task);
    });
  };

  deleteTask(id) {
    this.taskService.deleteTask(id).subscribe(() => {
      const index = this.tasks.findIndex(task => task.id === id);
      if(index>=0) {
        this.tasks.splice(index, 1);
      }
    });
  }

  onSubmit() {
    this.setTask();
  }

}
