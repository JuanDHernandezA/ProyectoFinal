import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
  
  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();
  
  ngOnInit(): void {
    
  }

  deleteTask():void{
    this.delete.emit(this.task); //Notificar al padre sobre la tarea a eliminar
  }
}
