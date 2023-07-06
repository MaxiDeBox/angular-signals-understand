import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { APITypesComponent } from './api-types/api-types.component';
import { API_URL } from './constants/api-constants';
import { apiData } from './mock/apimockdata';

@Component({
  selector: 'app-pod',
  standalone: true,
  imports: [NgIf, NgFor, APITypesComponent, CommonModule],
  templateUrl: './pod.component.html',
  styleUrls: ['./pod.component.css'],
})
export class PodComponent {
  protected mockData = apiData;
  elementType = signal(this.mockData[0].elementType);
  title = signal(this.mockData[0].title);
  description = signal(this.mockData[0].description);
  color = signal(this.mockData[0].color);
  apiType = signal(this.mockData[0].type);
  group = signal(this.mockData[0].group);
  url = computed(() => `${API_URL}/${this.group()}/${this.title()}`);

  constructor() {
    effect(() => {
      console.log('Effects', `the url is: ${this.url()}`);
    });
  }

  mouseEnter(value: {
    elementType: string;
    title: string;
    description: string;
    color: string;
    group: string;
  }): void {
    this.elementType.update(() => value.elementType);
    this.title.update(() => value.title);
    this.description.update(() => value.description);
    this.color.update(() => value.color);
    this.url = computed(() => `${API_URL}/${this.group()}/${this.title()}`);
  }

  loadDetails(url: string): void {
    console.log(url);
  }
}
