import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from '../pages/inicio/inicio.component';
import { TemplateComponent } from '../components/template/template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'JumpAI';
}
