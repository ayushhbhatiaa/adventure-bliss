import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavigationLink {
  label: string;
  route: string;
}

interface ServiceItem {
  name: string;
}

interface ContactInfo {
  icon: string;
  text: string;
}

interface SocialLink {
  platform: string;
  icon: string;
  url: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class FooterComponent {
  // Company Information
  companyInfo = {
    name: 'Adventure Bliss',
    // logoPath: 'assets/logo.svg',
    // Use original image for page content/footer
    logoPath: 'assets/images/myLogo.png',
    description:
      'Creating unforgettable travel experiences since 2020. Your adventure, our expertise.',
    establishedYear: 2020,
    currentYear: new Date().getFullYear(),
  };

  // Navigation Links
  quickLinks: NavigationLink[] = [
    { label: 'Home', route: '/home' },
    { label: 'About Us', route: '/about' },
    { label: 'Our Trips', route: '/trips' },
    { label: 'Services', route: '/services' },
    // { label: 'Gallery', route: '/gallery' },
    { label: 'Adventure Vault', route: '/adventure-vault' },
    { label: 'Blog', route: '/blog' },
  ];

  // Services List
  services: ServiceItem[] = [
    { name: 'Corporate Trips' },
    { name: 'Honeymoon Packages' },
    { name: 'Couple Adventures' },
    { name: 'Friends Getaway' },
    { name: 'Group Tours' },
    { name: 'Custom Packages' },
  ];

  // Contact Information
  contactInfo: ContactInfo[] = [
    { icon: '📧', text: 'adventurebliss@gmail.com' },
    { icon: '📞', text: '+91 941 67XX XXX' },
    { icon: '📞', text: '+91 999 9999 XXX' },
    { icon: '📍', text: 'Shop no. T10 - 5/76, Vijay Nagar, Kanpur, Uttar Pradesh, India - 208005' },
  ];

  // Social Media Links
  socialLinks: SocialLink[] = [
    {
      platform: 'facebook',
      icon: '📘',
      url: 'https://facebook.com/adventurebliss',
      ariaLabel: 'Facebook',
    },
    {
      platform: 'instagram',
      icon: '📷',
      url: 'https://instagram.com/adventure_bliss',
      ariaLabel: 'Instagram',
    },
    {
      platform: 'twitter',
      icon: '🐦',
      url: 'https://twitter.com/adventurebliss',
      ariaLabel: 'Twitter',
    },
    {
      platform: 'youtube',
      icon: '📺',
      url: 'https://youtube.com/adventurebliss',
      ariaLabel: 'YouTube',
    },
  ];

  // Footer Bottom Text
  legalInfo = {
    copyrightText: `© ${this.companyInfo.currentYear} ${this.companyInfo.name}. All rights reserved.`,
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  };
}
