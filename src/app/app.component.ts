// app.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';
import { HeaderComponent } from './header/header.component'; 
import { FooterComponent} from './footer/footer.component'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, FormsModule, HeaderComponent,FooterComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  listaTareas: string[] = [];
  nuevaTarea: string = '';
  
  private _tareasService = inject(TareasService);
  
  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas();
  }

  agregarTarea() {
    this._tareasService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareasService.getTareas();
  }

  eliminarTarea(index: number) {
    this._tareasService.eliminarTarea(index);
    this.listaTareas = this._tareasService.getTareas();
  }
}
