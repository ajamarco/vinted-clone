import GridCard, { type Condition } from "@/components/GridCard";

interface Listing {
  id: number;
  image: string;
  price: string;
  condition: Condition;
  title: string;
  size: string;
}

const LISTINGS: Listing[] = [
  /* ── Women ──────────────────────────────────────────── */
  { id: 1, image: "/image001.webp", price: "£18.00", condition: "Like new", title: "Zara Floral Midi Dress", size: "UK 12" },
  { id: 2, image: "/image001.webp", price: "£12.50", condition: "Very good", title: "H&M Linen Blazer — Cream", size: "UK 14" },
  { id: 3, image: "/image001.webp", price: "£9.99", condition: "Good", title: "ASOS Curve Wide-Leg Jeans", size: "UK 18" },
  { id: 4, image: "/image001.webp", price: "£5.00", condition: "New with tags", title: "Topshop Ribbed Crop Top", size: "UK 8" },
  { id: 5, image: "/image001.webp", price: "£22.00", condition: "Like new", title: "& Other Stories Silk Blouse", size: "UK 10" },
  /* ── Men ─────────────────────────────────────────────── */
  { id: 6, image: "/image001.webp", price: "£27.00", condition: "Very good", title: "Levi's 501 Jeans — Stonewash", size: "W32 L32" },
  { id: 7, image: "/image001.webp", price: "£35.00", condition: "Like new", title: "Nike Tech Fleece Hoodie", size: "UK L" },
  { id: 8, image: "/image001.webp", price: "£19.99", condition: "Good", title: "Ralph Lauren Oxford Shirt", size: "UK M" },
  { id: 9, image: "/image001.webp", price: "£28.00", condition: "New with tags", title: "Adidas Originals Track Jacket", size: "UK XL" },
  { id: 10, image: "/image001.webp", price: "£11.00", condition: "Very good", title: "ASOS Slim Chinos — Navy", size: "W30 L30" },
  /* ── Designer ────────────────────────────────────────── */
  { id: 11, image: "/image001.webp", price: "£120.00", condition: "Very good", title: "Burberry Classic Check Scarf", size: "One Size" },
  { id: 12, image: "/image001.webp", price: "£89.00", condition: "Good", title: "Coach Leather Crossbody Bag", size: "One Size" },
  { id: 13, image: "/image001.webp", price: "£55.00", condition: "Like new", title: "Ted Baker Floral Midi Dress", size: "UK 10" },
  /* ── Kids ────────────────────────────────────────────── */
  { id: 14, image: "/image001.webp", price: "£6.00", condition: "Very good", title: "Next Girls Party Dress", size: "Age 5–6" },
  { id: 15, image: "/image001.webp", price: "£14.00", condition: "Good", title: "Nike Kids Trainers — White", size: "UK 3" },
  { id: 16, image: "/image001.webp", price: "£18.00", condition: "Like new", title: "John Lewis Boys Puffer Jacket", size: "Age 8–9" },
  /* ── Home ────────────────────────────────────────────── */
  { id: 17, image: "/image001.webp", price: "£12.00", condition: "Like new", title: "IKEA Knitted Throw Blanket", size: "130×170cm" },
  { id: 18, image: "/image001.webp", price: "£8.50", condition: "Very good", title: "Habitat Ceramic Vase Set", size: "H 24cm" },
  { id: 19, image: "/image001.webp", price: "£19.99", condition: "Good", title: "Dunelm Linen Duvet Cover", size: "King" },
  /* ── Electronics ─────────────────────────────────────── */
  { id: 20, image: "/image001.webp", price: "£89.00", condition: "Very good", title: "Sony WH-1000XM4 Headphones", size: "One Size" },
  { id: 21, image: "/image001.webp", price: "£55.00", condition: "Good", title: "Apple AirPods (3rd Gen)", size: "One Size" },
  { id: 22, image: "/image001.webp", price: "£49.00", condition: "Like new", title: "Kindle Paperwhite 11th Gen", size: "One Size" },
  /* ── Entertainment ───────────────────────────────────── */
  { id: 23, image: "/image001.webp", price: "£22.00", condition: "Like new", title: "Taylor Swift — Eras Tour Vinyl LP", size: '12" LP' },
  { id: 24, image: "/image001.webp", price: "£28.00", condition: "Very good", title: "PlayStation 5 DualSense Controller", size: "One Size" },
  { id: 25, image: "/image001.webp", price: "£35.00", condition: "New with tags", title: "LEGO Architecture Skyline Set", size: "Ages 12+" },
  /* ── Hobbies & Collectables ──────────────────────────── */
  { id: 26, image: "/image001.webp", price: "£14.00", condition: "New with tags", title: "Winsor & Newton Watercolour Set", size: "24 colours" },
  { id: 27, image: "/image001.webp", price: "£45.00", condition: "Good", title: "Vintage Polaroid OneStep Camera", size: "One Size" },
  { id: 28, image: "/image001.webp", price: "£9.00", condition: "Like new", title: "Beginner's Knitting Starter Kit", size: "One Size" },
  /* ── Sports ──────────────────────────────────────────── */
  { id: 29, image: "/image001.webp", price: "£8.00", condition: "Very good", title: "Under Armour Running Shorts", size: "UK S" },
  { id: 30, image: "/image001.webp", price: "£12.00", condition: "New with tags", title: "Decathlon TPE Yoga Mat", size: "183×61cm" },
];

export default function ProductGrid() {
  return (
    <section aria-label="Listings" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {LISTINGS.map((item) => (
          <GridCard key={item.id} image={item.image} price={item.price} condition={item.condition} title={item.title} size={item.size} />
        ))}
      </div>
    </section>
  );
}
