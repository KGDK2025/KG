export interface Pooja {
  id: string;
  name: string;
  name_ml: string; 
  description: string;
  description_ml: string;
  timing?: string;
  cost?: string;
  image?: string;
}

export interface Festival {
  id: string;
  name: string;
  name_ml: string;
  date: string;
  description: string;
  description_ml: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  alt_ml: string;
}

export enum Section {
  Home = 'മുഖം', // Home
  About = 'വിവരണം', // About
  Poojas = 'പൂജകൾ', // Poojas
  Festivals = 'ഉത്സവങ്ങൾ', // Festivals
  Gallery = 'ചിത്രശാല', // Gallery
  Contact = 'ബന്ധപ്പെടുക', // Contact
  PoojaBooking = 'പൂജ ബുക്കിംഗ്', // Pooja Booking
  AdminBookings = 'ബുക്കിംഗ് വിവരങ്ങൾ' // Admin Bookings
}

export interface NavItem {
  label: string;
  label_ml: string;
  section: Section;
  icon: React.ReactNode;
}

export interface Booking {
  id: string; // Unique ID for the booking
  poojaId: string;
  poojaName: string; // English name of the pooja
  poojaName_ml: string; // Malayalam name of the pooja
  poojaCost?: string;
  devoteeName: string;
  nakshatra: string;
  poojaDate: string;
  contactNumber: string;
  bookingTimestamp: string; // ISO string of when the booking was made
}
