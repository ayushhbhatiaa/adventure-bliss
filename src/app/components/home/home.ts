import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  price: string;
  duration: string;
  bestTime: string;
  difficulty: string;
  highlights: string[];
}

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  isDestinationModalOpen = false;
  selectedDestination: Destination | null = null;

  destinations: Destination[] = [
    {
      id: 'goa',
      name: 'Goa Beach Paradise',
      location: 'Goa, India',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Experience the perfect blend of relaxation and adventure in Goa. From pristine beaches to vibrant nightlife, water sports to heritage sites, Goa offers something for every traveler.',
      price: 'Starting from ₹8,999',
      duration: '3-5 Days',
      bestTime: 'November to March',
      difficulty: 'Easy',
      highlights: [
        'Beautiful beaches with golden sand',
        'Water sports and adventure activities',
        'Portuguese colonial architecture',
        'Vibrant nightlife and beach parties',
        'Delicious seafood and local cuisine',
        'Spice plantations and wildlife sanctuaries'
      ]
    },
    {
      id: 'himalaya',
      name: 'Himalayan Trek',
      location: 'Himalayas, Nepal/India',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Embark on an unforgettable journey through the world\'s highest mountain range. Experience breathtaking views, diverse cultures, and challenge yourself with this once-in-a-lifetime adventure.',
      price: 'Starting from ₹15,999',
      duration: '7-14 Days',
      bestTime: 'March to May, September to November',
      difficulty: 'Moderate to Challenging',
      highlights: [
        'Stunning mountain vistas and sunrise views',
        'Experience local Sherpa culture',
        'Visit ancient monasteries and temples',
        'Diverse flora and fauna',
        'Professional guides and safety equipment',
        'Camping under starlit skies'
      ]
    },
    {
      id: 'rajasthan',
      name: 'Rajasthan Royal Tour',
      location: 'Rajasthan, India',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Step into the land of kings and experience the grandeur of Rajasthan. Explore magnificent palaces, majestic forts, and immerse yourself in the rich cultural heritage of this royal state.',
      price: 'Starting from ₹12,999',
      duration: '5-8 Days',
      bestTime: 'October to March',
      difficulty: 'Easy to Moderate',
      highlights: [
        'Magnificent palaces and forts',
        'Rich cultural heritage and traditions',
        'Desert safari and camel rides',
        'Colorful markets and handicrafts',
        'Royal cuisine and hospitality',
        'Folk music and dance performances'
      ]
    }
  ];

  openDestinationModal(destinationId: string) {
    this.selectedDestination = this.destinations.find(dest => dest.id === destinationId) || null;
    this.isDestinationModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeDestinationModal() {
    this.selectedDestination = null;
    this.isDestinationModalOpen = false;
    document.body.style.overflow = 'auto';
  }
}
