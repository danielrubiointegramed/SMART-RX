// src/app/app.component.ts

import { Component, HostBinding } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <router-outlet></router-outlet>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') public componentCssClass: any;
  constructor(public overlayContainer: OverlayContainer, public _snackBar: MatSnackBar) {
    console.log('ENVIROMENT SET')
    localStorage.setItem('enviroment', 'LIVE');
  }


  public onSetTheme(e: string) {
    this.overlayContainer.getContainerElement().classList.value = 'cdk-overlay-container ' + e;
    this.componentCssClass = e;
  }
}
