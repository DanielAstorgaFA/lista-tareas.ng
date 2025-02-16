import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  mostrarFecha(){
      const fechaHoy = new Date();
      const dia = fechaHoy.getDate();
      const month = fechaHoy.getMonth();
      const year = fechaHoy.getFullYear();
      
      return `Daniel Astorga López, ${dia } de ${month} de ${year}`;
  }
}
