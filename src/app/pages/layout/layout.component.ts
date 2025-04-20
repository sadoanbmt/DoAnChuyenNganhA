import { Component } from '@angular/core';
// import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SharedModule } from '../../../shared/modules/shared.module';
import { MaterialModule } from '../../../shared/modules/material.module';
import {NavbarComponent} from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ SharedModule, MaterialModule, NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
