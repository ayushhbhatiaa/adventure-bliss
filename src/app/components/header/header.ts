import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

interface NavigationLink {
  label: string;
  route: string;
  isContactButton?: boolean;
}

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isDarkMode = false;

  // Company Information
  companyInfo = {
    name: 'Adventure Bliss',
    logoPath: 'assets/images/myLogo.png'
  };

  // Navigation Links
  navigationLinks: NavigationLink[] = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Our Trips', route: '/trips' },
    { label: 'Services', route: '/services' },
    // { label: 'Gallery', route: '/gallery' },
    { label: 'Adventure Vault', route: '/adventure-vault' },
    { label: 'Blog', route: '/blog' },
    { label: 'Contact Us', route: '/contact', isContactButton: true }
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
