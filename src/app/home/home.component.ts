import { Component } from '@angular/core';
import { Appartement } from '../models/Appartement';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  listAppartements:any[]=[    
    { id: 1, title: "Cozy Studio Apartment", price: 1200, bedrooms: 1, bathrooms: 1, area: 500, location: "Downtown", available: true, amenities: ["Gym", "Pool", "Parking"], image: "https://images.pexels.com/photos/276666/pexels-photo-276666.jpeg?auto=compress&cs=tinysrgb&w=600",    description: "This cozy studio apartment is perfect for singles or couples looking for a comfortable living space in the heart of the city.", 
    likes: 0 },
    { id: 2, title: "Spacious Two-Bedroom ", price: 2000, bedrooms: 2, bathrooms: 2, area: 1000, location: "Suburbs", available: true, amenities: ["Balcony", "Pet Friendly", "Washer/Dryer"],description: "This cozy studio apartment is perfect for singles or couples looking for a comfortable living space in the heart of the city.", image: "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=600", likes: 0 },
    { id: 3, title: "Luxury Penthouse Suite", price: 5000, bedrooms: 3, bathrooms: 3, area: 2000, location: "City Center", available: false,description: "This cozy studio apartment is perfect for singles or couples looking for a comfortable living space in the heart of the city.", amenities: ["Private Terrace", "Concierge Service", "Valet Parking"], image: "https://images.pexels.com/photos/1510173/pexels-photo-1510173.jpeg?auto=compress&cs=tinysrgb&w=600", likes: 0 },
    { id: 4, title: "Modern Loft Apartment",description: "This cozy studio apartment is perfect for singles or couples looking for a comfortable living space in the heart of the city.", price: 1800, bedrooms: 1, bathrooms: 1, area: 800, location: "Art District", available: true, amenities: ["High Ceilings", "Exposed Brick", "Fitness Center"], image:"https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600", likes: 0 },
    { id: 5, title: "Charming Garden Apartment",description: "This cozy studio apartment is perfect for singles or couples looking for a comfortable living space in the heart of the city.", price: 1500, bedrooms: 2, bathrooms: 1, area: 700, location: "Suburbs", available: true, amenities: ["Private Garden", "Fireplace", "Parking Garage"], image: "https://images.pexels.com/photos/261045/pexels-photo-261045.jpeg?auto=compress&cs=tinysrgb&w=600", likes: 0 },
    { id: 6, title: "Beachfront Condo",description: "This cozy studio apartment is perfect for singles or couples looking for a comfortable living space in the heart of the city.", price: 3000, bedrooms: 2, bathrooms: 2, area: 1200, location: "Coastal Area", available: true, amenities: ["Ocean View", "Swimming Pool", "Private Beach Access"], image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600", likes: 0 },
  
  ];
  likeApartment(id:number)
  {
    this.listAppartements.find((l:Appartement)=>l.id==id).likes++
  }

  
}
