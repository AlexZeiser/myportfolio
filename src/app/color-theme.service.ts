import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {

  private defaultTheme = {
    '--background-color': '#120B35',
    '--text-color': '#02F4BF',
    '--secondary-text-color': '#E15544',
    '--third-text-color': '02F4BF',
    '--fourth-text-color': '#0B042D',
    '--border-color': '#02F4BF'
  };

  private alternativeTheme = {
    '--background-color': '#141416',
    '--text-color': '#ffffff',
    '--secondary-text-color': '#00ADEF',
    '--third-text-color': '02F4BF',
    '--fourth-text-color': '#0B042D',
    '--border-color': '#FBEA4C'
  };

  constructor() { }


  setTheme(theme: { [key: string]: string }): void {
    for (const key in theme) {
      document.documentElement.style.setProperty(key, theme[key]);
    }
  }

  setDefaultTheme(): void {
    this.setTheme(this.defaultTheme);
  }

  setAlternativeTheme(): void {
    this.setTheme(this.alternativeTheme);
  }
}
