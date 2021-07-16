import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Task } from 'src/app/shared/model/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  tasks: Task[];
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
      descricao: [null],
      concluida: false
    });
  }

  listTasks() {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }

  setTask() {
    let task: Task = this.form.value;
    this.taskService.postTask(task).subscribe(() => {
      this.tasks.push(task);
    });
  };

  deleteTask(id) {
    if (window.confirm('Deseja deletar essa tarefa ?')) {

      this.taskService.deleteTask(id).subscribe(() => {
        const index = this.tasks.findIndex((task: Task) => task.id === id);
        if (index >= 0) {
          this.tasks.splice(index, 1);
        }
      });
    }
  }

  editTask(task: Task) {
    task.concluida = !task.concluida;
    this.taskService.putTask(task).subscribe(() => {
      this.listTasks();
    })
  }

  onSubmit() {
    this.setTask();
    this.form.reset();
  }

}
