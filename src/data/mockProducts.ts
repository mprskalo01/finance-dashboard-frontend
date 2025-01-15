// Product Interface based on Mongoose Model
interface Product {
  _id: string;
  userId: string;
  name: string;
  price: number; // Stored in dollars
  expense: number; // Stored in dollars
  inStock: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// Mock Products Array
export const mockProducts: Product[] = [
  {
    _id: "6786a346da728c9f89bfa00a",
    userId: "66f84f82da0f82699ddf522c",
    name: "Toothbrush",
    price: 20, // Converted from cents
    expense: 7, // Converted from cents
    inStock: 6,
    createdAt: new Date(1727550355352).toISOString(),
    updatedAt: new Date(1727684486357).toISOString(),
  },
  {
    _id: "6786a347da728c9f89bfa00b",
    userId: "66f84f82da0f82699ddf522c",
    name: "Shampoo",
    price: 15, // Example product price
    expense: 5, // Example product expense
    inStock: 12,
    createdAt: new Date(1727550380000).toISOString(),
    updatedAt: new Date(1727684500000).toISOString(),
  },
  {
    _id: "6786a348da728c9f89bfa00c",
    userId: "66f84f82da0f82699ddf522c",
    name: "Conditioner",
    price: 18,
    expense: 6,
    inStock: 8,
    createdAt: new Date(1727550400000).toISOString(),
    updatedAt: new Date(1727684520000).toISOString(),
  },
];
