import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { mockTypes } from '../mock/mocktypes';

@Component({
  selector: 'app-api-types',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-types.component.html',
  styleUrls: ['./api-types.component.css'],
})
export class APITypesComponent {
  mockTypes = mockTypes;
}
