import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface ContactMethod {
  icon: string;
  title: string;
  details: string[];
}

interface FormOption {
  value: string;
  label: string;
}

interface BusinessHours {
  day: string;
  hours: string;
}

interface SocialLink {
  platform: string;
  icon: string;
  url: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent implements OnInit {
  // Contact Information
  contactInfo = {
    pageTitle: 'Contact Us',
    pageSubtitle: "Let's plan your next adventure together",
    formTitle: 'Send us a Message',
    getInTouchTitle: 'Get in Touch',
  };

  // Contact Methods
  contactMethods: ContactMethod[] = [
    {
      icon: '📧',
      title: 'Email Us',
      details: ['adventurebliss@gmail.com','info@adventurebliss.com'],
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+91 941 67XX XXX', '+91 999 9999 XXX'],
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['Shop no. T10 - 5/76,', 'Vijay Nagar, Kanpur', 'Uttar Pradesh, India', '208005'],
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 7:00 PM',
        'Saturday: 10:00 AM - 6:00 PM',
        'Sunday: 11:00 AM - 5:00 PM',
      ],
    },
  ];

  // Form Options
  tripTypes: FormOption[] = [
    { value: '', label: 'Select Trip Type' },
    { value: 'corporate', label: 'Corporate Trip' },
    { value: 'honeymoon', label: 'Honeymoon Package' },
    { value: 'couple', label: 'Couple Adventure' },
    { value: 'friends', label: 'Friends Group' },
    { value: 'large-group', label: 'Large Group' },
    { value: 'custom', label: 'Custom Package' },
  ];

  budgetRanges: FormOption[] = [
    { value: '', label: 'Select Budget' },
    { value: 'under-10k', label: 'Under ₹10,000' },
    { value: '10k-25k', label: '₹10,000 - ₹25,000' },
    { value: '25k-50k', label: '₹25,000 - ₹50,000' },
    { value: '50k-100k', label: '₹50,000 - ₹1,00,000' },
    { value: 'above-100k', label: 'Above ₹1,00,000' },
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
    {
      platform: 'whatsapp',
      icon: '💬',
      url: 'https://wa.me/+917985892062',
      ariaLabel: 'WhatsApp',
    },
  ];

  // Map Information
  mapInfo = {
    title: 'Find Us',
    sectionTitle: '📍 Our Location',
    address: 'Shop no. T10 - 5/76 Vijay Nagar, Kanpur',
    landmark: 'Uttar Pradesh, India - 208005'
  };

  showModal: boolean = false;
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required],
      tripType: ['', Validators.required],
      destination: ['', Validators.required],
      budget: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  // Form handling
  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    if (this.contactForm.valid) {
      const formEntries = this.contactForm.value;
      console.log('Form has been submitted successfully !!');
      this.showModal = true;
    }
    
    // integrate notification api here
    else {
      this.contactForm.markAllAsTouched();
    }
    
    // Here you can handle form submission
    console.log('Form submitted:', Object.fromEntries(formData));
    
    // Add your form handling logic here
    this.showModal = true;
    // alert('Thank you for your message! We will get back to you soon.');
  }
}
