import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme-section',
  templateUrl: './aboutme-section.component.html',
  styleUrls: ['./aboutme-section.component.css']
})
export class AboutmeSectionComponent {
  paragraphs: string[] = [
    'Hola! soy Brayan, llevo programando más de 4 años, y desde 2024 me he centrado de forma más intensa y profesional en desarrollo web fullstack.',
    'Me apasiona el backend, pero también disfruto creando interfaces atractivas y funcionales. El desarrollo es algo que encuentro muy entretenido y estimulante.',
    'Profesionalmente, soy exigente con mi trabajo y siempre busco mejorar y entregar resultados de calidad, manteniendo una buena comunicación y trabajo en equipo.',
    'Finalicé el ciclo de DAM en 2024 y cursé el bootcamp fullstack de CampusDualTIC, que fue un gran comienzo para mi carrera en desarrollo web.'
  ];
}
