import type { ReactElement } from "react";

import { GridCard } from "@/components/listings/GridCard";
import type { Listing } from "@/types/listing";

const LISTINGS: Listing[] = [
  /* ── Women ──────────────────────────────────────────── */
  {
    id: 1,
    image: "/image001.webp",
    brand: "Zara",
    price: "£18.00",
    condition: "Like new",
    title: "Floral Midi Dress",
    size: "UK 12",
  },
  {
    id: 2,
    image: "/image001.webp",
    brand: "H&M",
    price: "£12.50",
    condition: "Very good",
    title: "Linen Blazer — Cream",
    size: "UK 14",
  },
  {
    id: 3,
    image: "/image001.webp",
    brand: "ASOS",
    price: "£9.99",
    condition: "Good",
    title: "Curve Wide-Leg Jeans",
    size: "UK 18",
    badge: "sale",
  },
  {
    id: 4,
    image: "/image001.webp",
    brand: "Topshop",
    price: "£5.00",
    condition: "New with tags",
    title: "Ribbed Crop Top",
    size: "UK 8",
    badge: "new",
  },
  {
    id: 5,
    image: "/image001.webp",
    brand: "& Other Stories",
    price: "£22.00",
    condition: "Like new",
    title: "Silk Blouse",
    size: "UK 10",
  },
  /* ── Men ─────────────────────────────────────────────── */
  {
    id: 6,
    image: "/image001.webp",
    brand: "Levi's",
    price: "£27.00",
    condition: "Very good",
    title: "501 Jeans — Stonewash",
    size: "W32 L32",
  },
  {
    id: 7,
    image: "/image001.webp",
    brand: "Nike",
    price: "£35.00",
    condition: "Like new",
    title: "Tech Fleece Hoodie",
    size: "UK L",
    badge: "sale",
  },
  {
    id: 8,
    image: "/image001.webp",
    brand: "Ralph Lauren",
    price: "£19.99",
    condition: "Good",
    title: "Oxford Shirt",
    size: "UK M",
  },
  {
    id: 9,
    image: "/image001.webp",
    brand: "Adidas Originals",
    price: "£28.00",
    condition: "New with tags",
    title: "Track Jacket",
    size: "UK XL",
    badge: "new",
  },
  {
    id: 10,
    image: "/image001.webp",
    brand: "ASOS",
    price: "£11.00",
    condition: "Very good",
    title: "Slim Chinos — Navy",
    size: "W30 L30",
  },
  /* ── Designer ────────────────────────────────────────── */
  {
    id: 11,
    image: "/image001.webp",
    brand: "Burberry",
    price: "£120.00",
    condition: "Very good",
    title: "Classic Check Scarf",
    size: "One Size",
    badge: "sale",
  },
  {
    id: 12,
    image: "/image001.webp",
    brand: "Coach",
    price: "£89.00",
    condition: "Good",
    title: "Leather Crossbody Bag",
    size: "One Size",
  },
  {
    id: 13,
    image: "/image001.webp",
    brand: "Ted Baker",
    price: "£55.00",
    condition: "Like new",
    title: "Floral Midi Dress",
    size: "UK 10",
  },
  /* ── Kids ────────────────────────────────────────────── */
  {
    id: 14,
    image: "/image001.webp",
    brand: "Next",
    price: "£6.00",
    condition: "Very good",
    title: "Girls Party Dress",
    size: "Age 5–6",
  },
  {
    id: 15,
    image: "/image001.webp",
    brand: "Nike",
    price: "£14.00",
    condition: "Good",
    title: "Kids Trainers — White",
    size: "UK 3",
    badge: "sale",
  },
  {
    id: 16,
    image: "/image001.webp",
    brand: "John Lewis",
    price: "£18.00",
    condition: "Like new",
    title: "Boys Puffer Jacket",
    size: "Age 8–9",
  },
  /* ── Home ────────────────────────────────────────────── */
  {
    id: 17,
    image: "/image001.webp",
    brand: "IKEA",
    price: "£12.00",
    condition: "Like new",
    title: "Knitted Throw Blanket",
    size: "130×170cm",
  },
  {
    id: 18,
    image: "/image001.webp",
    brand: "Habitat",
    price: "£8.50",
    condition: "Very good",
    title: "Ceramic Vase Set",
    size: "H 24cm",
  },
  {
    id: 19,
    image: "/image001.webp",
    brand: "Dunelm",
    price: "£19.99",
    condition: "Good",
    title: "Linen Duvet Cover",
    size: "King",
  },
  /* ── Electronics ─────────────────────────────────────── */
  {
    id: 20,
    image: "/image001.webp",
    brand: "Sony",
    price: "£89.00",
    condition: "Very good",
    title: "WH-1000XM4 Headphones",
    size: "One Size",
    badge: "sale",
  },
  {
    id: 21,
    image: "/image001.webp",
    brand: "Apple",
    price: "£55.00",
    condition: "Good",
    title: "AirPods (3rd Gen)",
    size: "One Size",
  },
  {
    id: 22,
    image: "/image001.webp",
    brand: "Amazon",
    price: "£49.00",
    condition: "Like new",
    title: "Kindle Paperwhite 11th Gen",
    size: "One Size",
  },
  /* ── Entertainment ───────────────────────────────────── */
  {
    id: 23,
    image: "/image001.webp",
    brand: "Taylor Swift",
    price: "£22.00",
    condition: "Like new",
    title: "Eras Tour Vinyl LP",
    size: '12" LP',
  },
  {
    id: 24,
    image: "/image001.webp",
    brand: "Sony",
    price: "£28.00",
    condition: "Very good",
    title: "PlayStation 5 DualSense Controller",
    size: "One Size",
  },
  {
    id: 25,
    image: "/image001.webp",
    brand: "LEGO",
    price: "£35.00",
    condition: "New with tags",
    title: "Architecture Skyline Set",
    size: "Ages 12+",
    badge: "new",
  },
  /* ── Hobbies & Collectables ──────────────────────────── */
  {
    id: 26,
    image: "/image001.webp",
    brand: "Winsor & Newton",
    price: "£14.00",
    condition: "New with tags",
    title: "Watercolour Set",
    size: "24 colours",
    badge: "new",
  },
  {
    id: 27,
    image: "/image001.webp",
    brand: "Polaroid",
    price: "£45.00",
    condition: "Good",
    title: "Vintage OneStep Camera",
    size: "One Size",
    badge: "sale",
  },
  {
    id: 28,
    image: "/image001.webp",
    brand: "Unbranded",
    price: "£9.00",
    condition: "Like new",
    title: "Beginner's Knitting Starter Kit",
    size: "One Size",
  },
  /* ── Sports ──────────────────────────────────────────── */
  {
    id: 29,
    image: "/image001.webp",
    brand: "Under Armour",
    price: "£8.00",
    condition: "Very good",
    title: "Running Shorts",
    size: "UK S",
  },
  {
    id: 30,
    image: "/image001.webp",
    brand: "Decathlon",
    price: "£12.00",
    condition: "New with tags",
    title: "TPE Yoga Mat",
    size: "183×61cm",
    badge: "new",
  },
];

type ProductGridProps = Readonly<{
  listings?: readonly Listing[];
}>;

export const ProductGrid = ({
  listings = LISTINGS,
}: ProductGridProps): ReactElement => {
  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 md:gap-6 lg:grid-cols-4">
      {listings.map((item) => (
        <li key={item.id}>
          <GridCard
            image={item.image}
            brand={item.brand}
            price={item.price}
            condition={item.condition}
            title={item.title}
            size={item.size}
            badge={item.badge}
          />
        </li>
      ))}
    </ul>
  );
};
