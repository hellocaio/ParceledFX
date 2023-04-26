import {SingleItemType} from '../type/api.type';

const data: SingleItemType[] = [
  {
    id: 1,
    owner: 'John Doe',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    county: 'Los Angeles',
    zipcode: '90210',
    propertyType: 'Single Family Home',
    yearBuilt: 1990,
    units: 1,
    lotSize: 5000,
    guidancePrice: 1000000,
    bidCapRate: 5,
    taxNumber: '123-456-789',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 2,
    owner: 'Jane Smith',
    address: '456 Elm St',
    city: 'Anytown',
    state: 'CA',
    county: 'Los Angeles',
    zipcode: '90210',
    propertyType: 'Condo',
    yearBuilt: 2000,
    units: 2,
    lotSize: 2000,
    guidancePrice: 500000,
    bidCapRate: 4,
    taxNumber: '987-654-321',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 3,
    owner: 'Bob Johnson',
    address: '789 Oak St',
    city: 'Anytown',
    state: 'CA',
    county: 'Los Angeles',
    zipcode: '90210',
    propertyType: 'Apartment',
    yearBuilt: 2010,
    units: 10,
    lotSize: 10000,
    guidancePrice: 2000000,
    bidCapRate: 6,
    taxNumber: '555-444-333',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 4,
    owner: 'Alice Lee',
    address: '321 Maple Ave',
    city: 'Anytown',
    state: 'CA',
    county: 'Los Angeles',
    zipcode: '90210',
    propertyType: 'Single Family Home',
    yearBuilt: 1980,
    units: 1,
    lotSize: 6000,
    guidancePrice: 1500000,
    bidCapRate: 5.5,
    taxNumber: '222-333-444',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 5,
    owner: 'David Chen',
    address: '654 Pine St',
    city: 'Anytown',
    state: 'CA',
    county: 'Los Angeles',
    zipcode: '90210',
    propertyType: 'Condo',
    yearBuilt: 1995,
    units: 3,
    lotSize: 3000,
    guidancePrice: 800000,
    bidCapRate: 4.5,
    taxNumber: '777-888-999',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 6,
    owner: 'Karen Kim',
    address: '987 Cedar Blvd',
    city: 'Anytown',
    state: 'CA',
    county: 'Los Angeles',
    zipcode: '90210',
    propertyType: 'Apartment',
    yearBuilt: 2005,
    units: 20,
    lotSize: 20000,
    guidancePrice: 5000000,
    bidCapRate: 7,
    taxNumber: '111-222-333',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 7,
    owner: 'Alice Johnson',
    address: '123 Main St',
    city: 'Somewhere',
    state: 'TX',
    county: 'Travis',
    zipcode: '78704',
    propertyType: 'Single Family Home',
    yearBuilt: 1995,
    units: 1,
    lotSize: 8000,
    guidancePrice: 1200000,
    bidCapRate: 4.5,
    taxNumber: '123-456-789',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 8,
    owner: 'Bob Smith',
    address: '456 Elm St',
    city: 'Somewhere',
    state: 'TX',
    county: 'Travis',
    zipcode: '78704',
    propertyType: 'Condo',
    yearBuilt: 2005,
    units: 2,
    lotSize: 2500,
    guidancePrice: 600000,
    bidCapRate: 5,
    taxNumber: '987-654-321',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 9,
    owner: 'Charlie Brown',
    address: '789 Oak St',
    city: 'Somewhere',
    state: 'TX',
    county: 'Travis',
    zipcode: '78704',
    propertyType: 'Apartment',
    yearBuilt: 2015,
    units: 15,
    lotSize: 12000,
    guidancePrice: 2500000,
    bidCapRate: 6,
    taxNumber: '555-444-333',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 10,
    owner: 'David Lee',
    address: '321 Maple Ave',
    city: 'Somewhere',
    state: 'TX',
    county: 'Travis',
    zipcode: '78704',
    propertyType: 'Single Family Home',
    yearBuilt: 1985,
    units: 1,
    lotSize: 10000,
    guidancePrice: 1500000,
    bidCapRate: 5,
    taxNumber: '222-333-444',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 11,
    owner: 'Emily Davis',
    address: '654 Pine St',
    city: 'Somewhere',
    state: 'TX',
    county: 'Travis',
    zipcode: '78704',
    propertyType: 'Condo',
    yearBuilt: 1990,
    units: 3,
    lotSize: 3500,
    guidancePrice: 900000,
    bidCapRate: 4,
    taxNumber: '777-888-999',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 12,
    owner: 'Frank Kim',
    address: '987 Cedar Blvd',
    city: 'Somewhere',
    state: 'TX',
    county: 'Travis',
    zipcode: '78704',
    propertyType: 'Apartment',
    yearBuilt: 2000,
    units: 25,
    lotSize: 22000,
    guidancePrice: 5000000,
    bidCapRate: 7,
    taxNumber: '111-222-333',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 13,
    owner: 'John Doe',
    address: '123 Main St',
    city: 'Anywhere',
    state: 'CA',
    county: 'Los Angeles',
    zipcode: '90001',
    propertyType: 'Single Family Home',
    yearBuilt: 1990,
    units: 1,
    lotSize: 8000,
    guidancePrice: 1500000,
    bidCapRate: 5,
    taxNumber: '123-456-789',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 14,
    owner: 'Jane Smith',
    address: '456 Elm St',
    city: 'Anywhere',
    state: 'CA',
    county: 'Los Angeles',
    zipcode: '90002',
    propertyType: 'Condo',
    yearBuilt: 2000,
    units: 2,
    lotSize: 2500,
    guidancePrice: 700000,
    bidCapRate: 4.5,
    taxNumber: '987-654-321',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 15,
    owner: 'Mike Brown',
    address: '789 Oak St',
    city: 'Anywhere',
    state: 'CA',
    county: 'Los Angeles',
    zipcode: '90003',
    propertyType: 'Apartment',
    yearBuilt: 2010,
    units: 15,
    lotSize: 12000,
    guidancePrice: 3000000,
    bidCapRate: 6.5,
    taxNumber: '555-444-333',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 16,
    owner: 'Sarah Lee',
    address: '321 Maple Ave',
    city: 'Anywhere',
    state: 'CA',
    county: 'Los Angeles',
    zipcode: '90004',
    propertyType: 'Single Family Home',
    yearBuilt: 1980,
    units: 1,
    lotSize: 10000,
    guidancePrice: 2000000,
    bidCapRate: 5.5,
    taxNumber: '222-333-444',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 17,
    owner: 'Alex Kim',
    address: '654 Pine St',
    city: 'Anywhere',
    state: 'CA',
    county: 'Los Angeles',
    zipcode: '90005',
    propertyType: 'Condo',
    yearBuilt: 1995,
    units: 3,
    lotSize: 3500,
    guidancePrice: 1200000,
    bidCapRate: 4,
    taxNumber: '777-888-999',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
  {
    id: 18,
    owner: 'Amanda Lee',
    address: '987 Cedar Blvd',
    city: 'Anywhere',
    state: 'CA',
    county: 'Los Angeles',
    zipcode: '90006',
    propertyType: 'Apartment',
    yearBuilt: 2005,
    units: 25,
    lotSize: 22000,
    guidancePrice: 5000000,
    bidCapRate: 7,
    taxNumber: '111-222-333',
    imageUrl:
      'https://i.pinimg.com/originals/61/3e/bd/613ebdd3b862c34a68b7e5103617285e.jpg',
  },
];

export default data;
