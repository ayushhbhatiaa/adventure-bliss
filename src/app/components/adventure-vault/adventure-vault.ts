import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TravelPhoto {
  id: number;
  src: string;
  title: string;
  location: string;
  description: string;
  tags: string[];
  date: string;
  category: string;
}

@Component({
  selector: 'app-adventure-vault',
  imports: [CommonModule],
  templateUrl: './adventure-vault.html',
  styleUrls: ['./adventure-vault.scss']
})
export class AdventureVaultComponent {
  selectedCategory = 'all';
  selectedPhoto: TravelPhoto | null = null;
  isModalOpen = false;

  // Page Information
  pageInfo = {
    title: 'Adventure Vault',
    subtitle: 'A treasure trove of unforgettable moments and breathtaking destinations',
    description: 'Explore our collection of stunning travel photography capturing the essence of adventure, culture, and natural beauty from around the world.'
  };

  // Photo Categories
  categories = [
    { id: 'all', name: 'All Adventures', icon: '🌍' },
    { id: 'mountains', name: 'Mountains', icon: '🏔️' },
    { id: 'beaches', name: 'Beaches', icon: '🏖️' },
    { id: 'cities', name: 'Cities', icon: '🏙️' },
    { id: 'culture', name: 'Culture', icon: '🎭' },
    { id: 'wildlife', name: 'Wildlife', icon: '🦁' },
    { id: 'adventure', name: 'Adventure Sports', icon: '🚵‍♂️' }
  ];

  // Travel Photos Collection
  travelPhotos: TravelPhoto[] = [
    {
      id: 1,
      src: 'https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Himalayan Sunrise',
      location: 'Himalayas, Nepal',
      description: 'Witnessing the first rays of sun painting the snow-capped peaks in golden hues.',
      tags: ['mountains', 'sunrise', 'trekking'],
      date: '2023-10-15',
      category: 'mountains'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1496566084516-c5b96fcbd5c8?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Goa Beach Bliss',
      location: 'Goa, India',
      description: 'Crystal clear waters and pristine beaches perfect for relaxation and water sports.',
      tags: ['beach', 'sunset', 'relaxation'],
      date: '2023-08-22',
      category: 'beaches'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1591946522651-90fbace43004?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Rajasthan Royal Heritage',
      location: 'Jaipur, Rajasthan',
      description: 'Magnificent palaces and forts showcasing the rich cultural heritage of India.',
      tags: ['heritage', 'architecture', 'culture'],
      date: '2023-09-10',
      category: 'culture'
    },
    {
      id: 4,
      src: 'https://media.istockphoto.com/id/1440013196/photo/high-angle-shot-of-bandra-worli-sealink-in-mumbai-at-night-time.webp?a=1&b=1&s=612x612&w=0&k=20&c=ay_zwPPIOr9LXFA9riixd_pmCit2ZLbzXr7NW70-Pfk=',
      title: 'Mumbai City Lights',
      location: 'Mumbai, Maharashtra',
      description: 'The bustling metropolis comes alive with vibrant energy and endless possibilities.',
      tags: ['cityscape', 'nightlife', 'urban'],
      date: '2023-07-05',
      category: 'cities'
    },
    {
      id: 5,
      src: 'https://media.istockphoto.com/id/1156897410/photo/showstopper-a-wild-male-bengal-tiger-sitting-on-road-and-in-background-safari-vehicles.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZfP3FyY2_0otWATUj0cVOnTVbkxkFVK2leVdEHO3ES8=',
      title: 'Wildlife Safari',
      location: 'Jim Corbett, Uttarakhand',
      description: 'Encountering magnificent wildlife in their natural habitat during an unforgettable safari.',
      tags: ['wildlife', 'safari', 'nature'],
      date: '2023-11-03',
      category: 'wildlife'
    },
    {
      id: 6,
      src: 'https://media.istockphoto.com/id/1266076291/photo/happy-young-woman-on-luxury-safari-looking-at-will-elephant-walking-in-the-jungle.webp?a=1&b=1&s=612x612&w=0&k=20&c=-C9hAG4BwN_pDsR8AXlSX1--CJ3fW9dytyjjvUvDiZ8=',
      title: 'Wildlife Safari',
      location: 'Jim Corbett, Uttarakhand',
      description: 'Encountering magnificent wildlife in their natural habitat during an unforgettable safari.',
      tags: ['wildlife', 'safari', 'nature'],
      date: '2023-11-03',
      category: 'wildlife'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1517339234442-5cfdc9a90a69?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Wildlife Safari',
      location: 'Jim Corbett, Uttarakhand',
      description: 'Encountering magnificent wildlife in their natural habitat during an unforgettable safari.',
      tags: ['wildlife', 'safari', 'nature'],
      date: '2023-11-03',
      category: 'wildlife'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1689841667551-eeaee48f2247?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'River Rafting Rush',
      location: 'Rishikesh, Uttarakhand',
      description: 'Thrilling white water rafting through the rapids of the sacred Ganges river.',
      tags: ['adventure', 'rafting', 'adrenaline'],
      date: '2023-06-18',
      category: 'adventure'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1635786202337-b012a5c5e780?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Paragliding Thrill',
      location: 'Bir-Billing, Himachal Pradesh',
      description: 'Thrilling white water rafting through the rapids of the sacred Ganges river.',
      tags: ['adventure', 'height', 'adrenaline'],
      date: '2023-06-18',
      category: 'adventure'
    },
    {
      id: 8,
      src: 'https://media.istockphoto.com/id/483629308/photo/silhouettes-of-hikers-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZSYhE3Ojkht8fW9s2gyVvvt19DmOtGfjQAI2v_GosGU=',
      title: 'Mountain Trekking',
      location: 'Rishikesh, Uttarakhand',
      description: 'Thrilling white water rafting through the rapids of the sacred Ganges river.',
      tags: ['adrenaline', 'trekking', 'adventure'],
      date: '2023-06-18',
      category: 'adventure'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Kashmir Valley',
      location: 'Srinagar, Kashmir',
      description: 'The paradise on earth with its stunning lakes, gardens, and snow-capped mountains.',
      tags: ['valleys', 'lakes', 'paradise'],
      date: '2023-05-12',
      category: 'mountains'
    },
    {
      id: 10,
      src: 'https://media.istockphoto.com/id/666238696/photo/longtail-boats-phi-phi-islands-thailand.webp?a=1&b=1&s=612x612&w=0&k=20&c=cnI_nlKIkWprW5GkvW802ZVIEWEFs0_1LJ0Lya87KJU=',
      title: 'Andaman Islands',
      location: 'Havelock Island, Andaman',
      description: 'Pristine beaches with turquoise waters perfect for diving and water sports.',
      tags: ['islands', 'diving', 'pristine'],
      date: '2023-04-08',
      category: 'beaches'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Taj Mahal Walk',
      location: 'Agra, Uttar Pradesh',
      description: 'Exploring the narrow lanes and ancient monuments of India\'s historic capital.',
      tags: ['heritage', 'history', 'walking'],
      date: '2023-03-25',
      category: 'culture'
    },
    {
      id: 12,
      src:'https://images.unsplash.com/photo-1656593346518-7314e72ed3d1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Humayun\'s Tomb',
      location: 'Delhi',
      description: 'Exploring the narrow lanes and ancient monuments of India\'s historic capital.',
      tags: ['heritage', 'history', 'walking'],
      date: '2023-03-25',
      category: 'culture'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Manali Adventure',
      location: 'Manali, Himachal Pradesh',
      description: 'Snow-covered peaks and adventure sports in the beautiful hill station of Manali.',
      tags: ['hills', 'snow', 'adventure'],
      date: '2023-02-14',
      category: 'mountains'
    },
    {
      id: 14,
      src: 'https://media.istockphoto.com/id/1359349136/photo/hawaiian-sunset-with-sailboat-and-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=HYNqpQdOHeXaY1lrqkVvXBb8bNca7W3VxrTrURZavyk=',
      title: 'Goa Beach Sunset',
      location: 'Arambol Beach, Goa',
      description: 'Magical sunset moments by the Arabian Sea with vibrant colors painting the sky.',
      tags: ['sunset', 'beach', 'magical'],
      date: '2023-01-20',
      category: 'beaches'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1697130383976-38f28c444292?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Bangalore Buildings',
      location: 'Bangalore, Karnataka',
      description: 'Lush green gardens and modern architecture in India\'s Silicon Valley.',
      tags: ['gardens', 'modern', 'green'],
      date: '2023-12-10',
      category: 'cities'
    },
    {
      id: 16,
      src: 'https://media.istockphoto.com/id/516984446/photo/varanasi-burning-grounds-at-night.jpg?s=612x612&w=0&k=20&c=CbX2ZyMPKpOQMBXyth3FIDSR0yqciYmfKfSYtBJeEDs=',
      title: 'Varanasi Ghats',
      location: 'Varanasi, Uttar Pradesh',
      description: 'The Ghat\'s & Food\'s of Varanasi to capture your soul.',
      tags: ['rivers', 'foods', 'ghats'],
      date: '2023-12-10',
      category: 'cities'
    }
  ];

  // Filter photos by category
  get filteredPhotos() {
    if (this.selectedCategory === 'all') {
      return this.travelPhotos;
    }
    return this.travelPhotos.filter(photo => photo.category === this.selectedCategory);
  }

  // Get category info
  get currentCategoryInfo() {
    return this.categories.find(cat => cat.id === this.selectedCategory) || this.categories[0];
  }

  // Set selected category
  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }

  // Open photo modal
  openPhotoModal(photo: TravelPhoto) {
    this.selectedPhoto = photo;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  // Close photo modal
  closePhotoModal() {
    this.selectedPhoto = null;
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  // Navigate through photos in modal
  navigatePhoto(direction: 'prev' | 'next') {
    if (!this.selectedPhoto) return;
    
    const currentIndex = this.filteredPhotos.findIndex(photo => photo.id === this.selectedPhoto!.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : this.filteredPhotos.length - 1;
    } else {
      newIndex = currentIndex < this.filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    }
    
    this.selectedPhoto = this.filteredPhotos[newIndex];
  }

  // Track by function for ngFor performance
  trackByPhotoId(index: number, photo: TravelPhoto): number {
    return photo.id;
  }

  // Format date for display
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}