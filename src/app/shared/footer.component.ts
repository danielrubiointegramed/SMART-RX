import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer-container">
      <div class="footer-content">
        <nav class="footer-links">
          <a routerLink="/privacy">Aviso de Privacidad</a>
          <a routerLink="/terms">Términos y Condiciones</a>
          <a routerLink="/contact">Contacto</a>
        </nav>
        <div class="footer-copy">
          <span>&copy; {{ currentYear }} Tratamientos Individualizados, S.A. de C.V.</span>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
