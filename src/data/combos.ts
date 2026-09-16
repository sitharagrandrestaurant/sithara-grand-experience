import royalFamilyFeastImage from "@/assets/ROYAL FAMILY FEAST.png";
import familyFeastImage from "@/assets/FAMILY FEAST.png";
import specialComboImage from "@/assets/SITHARA GRAND SPECIAL COMBO.png";
import vegBiryaniComboImage from "@/assets/VEG BIRYANI COMBO.png";
import vegStarterComboImage from "@/assets/VEG STARTER COMBO.png";
import nonVegStarterComboImage from "@/assets/NON-VEG STARTER COMBO.png";

export type ComboItem = { name: string; quantity: string };

export type Combo = {
  id: string;
  name: string;
  serving?: string;
  price: number;
  badge?: string;
  image: string;
  items: ComboItem[];
};

export const combos: Combo[] = [
  {
    id: "combo-royal-family-feast",
    name: "ROYAL FAMILY FEAST",
    serving: "For: 5–6 Members",
    price: 1699,
    badge: "BEST SELLER",
    image: royalFamilyFeastImage,
    items: [
      { name: "Chicken 65", quantity: "1" },
      { name: "Loose Prawns", quantity: "1" },
      { name: "Butter Naan", quantity: "6 Pcs." },
      { name: "Paneer Butter Masala", quantity: "1" },
      { name: "Chicken Dum Biryani", quantity: "2" },
      { name: "Mutton Biryani", quantity: "1" },
      { name: "Thumbs Up 1L", quantity: "1" },
    ],
  },
  {
    id: "combo-family-feast",
    name: "FAMILY FEAST",
    serving: "For: 4 Members",
    price: 1099,
    image: familyFeastImage,
    items: [
      { name: "Chicken 65", quantity: "1" },
      { name: "Butter Naan", quantity: "4 Pcs." },
      { name: "Paneer Butter Masala", quantity: "1" },
      { name: "Chicken Dum Biryani", quantity: "1" },
      { name: "Mutton Biryani", quantity: "1" },
      { name: "Thumbs Up 1L", quantity: "1" },
    ],
  },
  {
    id: "combo-sithara-grand-special",
    name: "SITHARA GRAND SPECIAL COMBO",
    serving: "For: 2",
    price: 499,
    badge: "PERFECT FOR 2",
    image: specialComboImage,
    items: [
      { name: "Chicken 65", quantity: "1" },
      { name: "Butter Naan", quantity: "2" },
      { name: "Paneer Butter Masala", quantity: "1" },
      { name: "Chicken Dum Biryani", quantity: "1" },
      { name: "Thumbs Up 500ml", quantity: "1" },
    ],
  },
  {
    id: "combo-veg-biryani",
    name: "VEG BIRYANI COMBO",
    price: 499,
    badge: "100% VEG",
    image: vegBiryaniComboImage,
    items: [
      { name: "Butter Naan", quantity: "2" },
      { name: "Paneer Butter Masala", quantity: "1" },
      { name: "Mushroom 65 (Starter)", quantity: "1" },
      { name: "Veg Biryani", quantity: "1" },
    ],
  },
  {
    id: "combo-veg-starter",
    name: "VEG STARTER COMBO",
    price: 349,
    badge: "100% VEG",
    image: vegStarterComboImage,
    items: [
      { name: "Crispy Corn", quantity: "1" },
      { name: "Veg Manchuria", quantity: "1" },
    ],
  },
  {
    id: "combo-non-veg-starter",
    name: "NON-VEG STARTER COMBO",
    price: 399,
    badge: "PERFECT STARTER COMBO",
    image: nonVegStarterComboImage,
    items: [
      { name: "Chicken Lollipop", quantity: "4 Pcs" },
      { name: "Loose Prawns", quantity: "1" },
    ],
  },
];
