import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.isDarkMode.asObservable();

  constructor() {
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      this.setTheme(savedTheme === 'dark');
    } else {
      this.setTheme(prefersDark);
    }
  }

  toggleTheme(): void {
    const currentTheme = this.isDarkMode.value;
    this.setTheme(!currentTheme);
  }

  setTheme(isDark: boolean): void {
    this.isDarkMode.next(isDark);
    const theme = isDark ? 'dark' : 'light';
    
    // Update the data-theme attribute on the document element
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save preference to localStorage
    localStorage.setItem('theme', theme);
  }

  getCurrentTheme(): string {
    return this.isDarkMode.value ? 'dark' : 'light';
  }
}